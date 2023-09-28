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
exports.UserProfileOutput = exports.UserProfileInput = void 0;
const Validator = require("class-validator");
const userProfile_type_1 = require("../types/userProfile.type");
class UserProfileInput {
}
exports.UserProfileInput = UserProfileInput;
__decorate([
    Validator.IsNumber(),
    __metadata("design:type", Object)
], UserProfileInput.prototype, "userId", void 0);
class UserProfileOutput {
}
exports.UserProfileOutput = UserProfileOutput;
__decorate([
    Validator.IsOptional(),
    __metadata("design:type", userProfile_type_1.UserProfile)
], UserProfileOutput.prototype, "userProfile", void 0);
//# sourceMappingURL=userProfile.dto.js.map