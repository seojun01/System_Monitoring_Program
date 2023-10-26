"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarinfoModule = void 0;
const common_1 = require("@nestjs/common");
const varinfo_service_1 = require("./varinfo.service");
const varinfo_controller_1 = require("./varinfo.controller");
const varinfo_entity_1 = require("./entities/varinfo.entity");
const typeorm_1 = require("@nestjs/typeorm");
let VarinfoModule = class VarinfoModule {
};
exports.VarinfoModule = VarinfoModule;
exports.VarinfoModule = VarinfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([varinfo_entity_1.VarEntity])],
        controllers: [varinfo_controller_1.VarinfoController],
        providers: [varinfo_service_1.VarinfoService],
    })
], VarinfoModule);
//# sourceMappingURL=varinfo.module.js.map