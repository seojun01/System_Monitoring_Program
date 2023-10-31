"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoService = void 0;
const common_1 = require("@nestjs/common");
let ProtoService = class ProtoService {
    create(createProtoDto) {
        return 'This action adds a new proto';
    }
    findAll() {
        return `This action returns all proto`;
    }
    findOne(id) {
        return `This action returns a #${id} proto`;
    }
    update(id, updateProtoDto) {
        return `This action updates a #${id} proto`;
    }
    remove(id) {
        return `This action removes a #${id} proto`;
    }
};
exports.ProtoService = ProtoService;
exports.ProtoService = ProtoService = __decorate([
    (0, common_1.Injectable)()
], ProtoService);
//# sourceMappingURL=proto.service.js.map