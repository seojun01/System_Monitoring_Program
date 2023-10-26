"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsinfoModule = void 0;
const common_1 = require("@nestjs/common");
const psinfo_service_1 = require("./psinfo.service");
const psinfo_controller_1 = require("./psinfo.controller");
const psinfo_entity_1 = require("./entities/psinfo.entity");
const typeorm_1 = require("@nestjs/typeorm");
let PsinfoModule = class PsinfoModule {
};
exports.PsinfoModule = PsinfoModule;
exports.PsinfoModule = PsinfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([psinfo_entity_1.PsinfoEntity])],
        controllers: [psinfo_controller_1.PsinfoController],
        providers: [psinfo_service_1.PsinfoService],
    })
], PsinfoModule);
//# sourceMappingURL=psinfo.module.js.map