"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const config_1 = require("@nestjs/config");
let AuthService = exports.AuthService = class AuthService {
    constructor(userService, jwtService, config) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.config = config;
    }
    async login({ email, password }, response) {
        try {
            const validateUser = await this.userService.logInValidate(email, password);
            if (validateUser.success && validateUser.user != null) {
                const accessPayload = {
                    sub: validateUser.user.id,
                };
                const refreshPayload = {
                    sub: validateUser.user.id,
                };
                console.log('JWT_ACCESS_TOKEN_PRIVATE_KEY: ', this.config.get('JWT_ACCESS_TOKEN_PRIVATE_KEY'), this.config.get('JWT_ACCESS_TOKEN_EXPIRATION'), this.config.get('JWT_REFRESH_TOKEN_PRIVATE_KEY'), this.config.get('JWT_REFRESH_TOKEN_EXPIRATION'));
                const [accessToken, refreshToken] = [
                    await this.jwtService.signAsync(accessPayload),
                    await this.jwtService.signAsync(refreshPayload, {
                        secret: this.config.get('JWT_REFRESH_TOKEN_PRIVATE_KEY'),
                        expiresIn: this.config.get('JWT_REFRESH_TOKEN_EXPIRATION'),
                    }),
                ];
                console.log('Token : ', accessToken, refreshToken);
                response.cookie('rt', refreshToken, {
                    path: '/',
                    httpOnly: true,
                    sameSite: 'strict',
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
                });
                await this.userService.update(validateUser.user.id, {
                    refreshToken,
                });
                return {
                    success: true,
                    accessToken,
                    user: validateUser.user,
                };
            }
            else {
                return { success: false, error: validateUser.error };
            }
        }
        catch (e) {
            console.log('login err - ', e);
            return { success: false, error: '로그인에 실패하였습니다.' };
        }
    }
    async refreshToken(user, req) {
        try {
            console.log('refreshToken: 스탭 1-1: ', user);
            const refreshToken = req.cookies['rt'];
            console.log('refreshToken: 스탭 2');
            if (!refreshToken ||
                !user ||
                !user.refreshToken ||
                refreshToken != user.refreshToken) {
                console.log('refreshToken: 검증 불일치 오류');
                new common_1.UnauthorizedException();
            }
            console.log('refreshToken: 스탭 3');
            const accessPayload = {
                sub: user.id,
            };
            const accessToken = await this.jwtService.signAsync(accessPayload);
            console.log('refreshToken: 검증');
            return { success: true, accessToken };
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
    async logout(user, res) {
        try {
            console.log('접근1');
            res.cookie('rt', '', { maxAge: 0 });
            console.log('쿠키삭제2', user.id);
            await this.userService.update(user.id, {
                refreshToken: null,
            });
            console.log('접근3');
            return { success: true };
        }
        catch (e) {
            console.log('실패');
            return { success: false, error: '계정 생성에 실패하였습니다.' };
        }
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map