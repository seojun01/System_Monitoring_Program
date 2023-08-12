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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const dist_1 = require("@nestjs/jwt/dist");
const bcrypt = require("bcrypt");
const authDto_1 = require("./dto/authDto");
const user_service_1 = require("../user/user.service");
const auth_service_1 = require("./auth.service");
let AuthController = exports.AuthController = class AuthController {
    constructor(userService, jwtService, authService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.authService = authService;
    }
    async signin(authDTO, Response) {
        const { email, password } = authDTO;
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('이메일 또는 비밀번호를 확인 해주세요.');
        }
        const isSamePassword = bcrypt.compareSync(password, user.password);
        if (!isSamePassword) {
            throw new common_1.UnauthorizedException('이메일 또는 비밀번호를 확인해 주세요.');
        }
        const cookie = this.authService.getCookieWithJwtToken(user.id);
        Response.setHeader('Set-Cookie', cookie);
        user.password = undefined;
        return Response.send(user);
    }
    async logOut(request, Response) {
        Response.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
        return Response.sendStatus(200);
    }
};
__decorate([
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authDto_1.AuthDTO.SignIn, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
__decorate([
    (0, common_1.Post)('/logout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authDto_1.AuthDTO.SignIn, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logOut", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        dist_1.JwtService,
        auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map