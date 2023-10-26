"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketinfoModule = void 0;
const common_1 = require("@nestjs/common");
const packetinfo_service_1 = require("./packetinfo.service");
const packetinfo_controller_1 = require("./packetinfo.controller");
const packetinfo_entity_1 = require("./entities/packetinfo.entity");
const typeorm_1 = require("@nestjs/typeorm");
let PacketinfoModule = class PacketinfoModule {
};
exports.PacketinfoModule = PacketinfoModule;
exports.PacketinfoModule = PacketinfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([packetinfo_entity_1.PacketEntity])],
        controllers: [packetinfo_controller_1.PacketinfoController],
        providers: [packetinfo_service_1.PacketinfoService],
    })
], PacketinfoModule);
//# sourceMappingURL=packetinfo.module.js.map