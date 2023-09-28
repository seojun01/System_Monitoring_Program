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
exports.AccessTokenOutput = void 0;
const coreOutput_dto_1 = require("../../../common/dtos/coreOutput.dto");
const Validator = require("class-validator");
class AccessTokenOutput extends coreOutput_dto_1.CoreOutput {
}
exports.AccessTokenOutput = AccessTokenOutput;
__decorate([
    Validator.IsString(),
    __metadata("design:type", String)
], AccessTokenOutput.prototype, "accessToken", void 0);
//# sourceMappingURL=token.dto.js.map