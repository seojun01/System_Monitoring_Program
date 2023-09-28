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
exports.LogOutInput = exports.LoginOutput = exports.LoginInput = void 0;
const Validator = require("class-validator");
const coreOutput_dto_1 = require("../../../common/dtos/coreOutput.dto");
class LoginInput {
}
exports.LoginInput = LoginInput;
__decorate([
    Validator.IsEmail({}, { message: '이메일을 입력해주세요.' }),
    __metadata("design:type", String)
], LoginInput.prototype, "email", void 0);
__decorate([
    Validator.Length(8, 100, {
        message: '비밀번호는 최소 8자 이상이어야 합니다.',
    }),
    Validator.IsString(),
    __metadata("design:type", String)
], LoginInput.prototype, "password", void 0);
class LoginOutput extends coreOutput_dto_1.CoreOutput {
}
exports.LoginOutput = LoginOutput;
__decorate([
    Validator.IsString(),
    __metadata("design:type", String)
], LoginOutput.prototype, "accessToken", void 0);
class LogOutInput {
}
exports.LogOutInput = LogOutInput;
__decorate([
    Validator.IsNumber(),
    __metadata("design:type", Number)
], LogOutInput.prototype, "userId", void 0);
//# sourceMappingURL=login.dto.js.map