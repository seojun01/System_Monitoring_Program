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
exports.UpdateAccountDto = void 0;
const Validator = require("class-validator");
class UpdateAccountDto {
}
exports.UpdateAccountDto = UpdateAccountDto;
__decorate([
    Validator.IsEmail({}, { message: '이메일을 입력해주세요.' }),
    Validator.MaxLength(32, { message: '이메일은 6자 이상이어야 합니다.' }),
    __metadata("design:type", String)
], UpdateAccountDto.prototype, "email", void 0);
__decorate([
    Validator.MaxLength(128, {
        message: '비밀번호는 최소 8자 이상이어야 합니다.',
    }),
    Validator.IsString(),
    __metadata("design:type", String)
], UpdateAccountDto.prototype, "password", void 0);
__decorate([
    Validator.Length(2, 30, { message: '이름은 최소 2자 이상이어야 합니다.' }),
    Validator.IsString(),
    __metadata("design:type", String)
], UpdateAccountDto.prototype, "name", void 0);
__decorate([
    Validator.Length(13, 13, { message: '휴대전화 번호를 입력해주세요.' }),
    Validator.IsString(),
    __metadata("design:type", String)
], UpdateAccountDto.prototype, "mobile", void 0);
//# sourceMappingURL=updateAccount.dto.js.map