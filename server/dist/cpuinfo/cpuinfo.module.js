"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpuinfoModule = void 0;
const common_1 = require("@nestjs/common");
const cpuinfo_service_1 = require("./cpuinfo.service");
const cpuinfo_controller_1 = require("./cpuinfo.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cpuinfo_entity_1 = require("./entities/cpuinfo.entity");
let CpuinfoModule = exports.CpuinfoModule = class CpuinfoModule {
};
exports.CpuinfoModule = CpuinfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cpuinfo_entity_1.CpuEntity])],
        controllers: [cpuinfo_controller_1.CpuinfoController],
        providers: [cpuinfo_service_1.CpuinfoService],
    })
], CpuinfoModule);
//# sourceMappingURL=cpuinfo.module.js.map