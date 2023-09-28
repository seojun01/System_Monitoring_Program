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
exports.JwtRefreshStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const config_1 = require("@nestjs/config");
const user_service_1 = require("../../user/user.service");
const fromCookie = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['rt'];
    }
    return token;
};
let JwtRefreshStrategy = exports.JwtRefreshStrategy = class JwtRefreshStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh') {
    constructor(config, userService) {
        super({
            jwtFromRequest: fromCookie,
            ignoreExpiration: false,
            secretOrKey: config.get('JWT_REFRESH_TOKEN_PRIVATE_KEY'),
        });
        this.config = config;
        this.userService = userService;
    }
    async validate(payload) {
        let user = null;
        try {
            console.log('JwtRefreshStrategy: 접근');
            user = this.userService.findById(payload.sub);
            console.log('JwtRefreshStrategy: 검증');
        }
        catch (e) {
            console.log('JwtRefreshStrategy: 오류 - 1');
            throw new common_1.UnauthorizedException();
        }
        if (!user) {
            console.log('JwtRefreshStrategy: 오류 - 2');
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
exports.JwtRefreshStrategy = JwtRefreshStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        user_service_1.UserService])
], JwtRefreshStrategy);
//# sourceMappingURL=jwtRefresh.strategy.js.map