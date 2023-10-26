"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedinfoModule = void 0;
const common_1 = require("@nestjs/common");
const fixedinfo_service_1 = require("./fixedinfo.service");
const fixedinfo_controller_1 = require("./fixedinfo.controller");
const fixedinfo_entity_1 = require("./entities/fixedinfo.entity");
const typeorm_1 = require("@nestjs/typeorm");
let FixedinfoModule = class FixedinfoModule {
};
exports.FixedinfoModule = FixedinfoModule;
exports.FixedinfoModule = FixedinfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([fixedinfo_entity_1.FixedEntity])],
        controllers: [fixedinfo_controller_1.FixedinfoController],
        providers: [fixedinfo_service_1.FixedinfoService],
    })
], FixedinfoModule);
//# sourceMappingURL=fixedinfo.module.js.map