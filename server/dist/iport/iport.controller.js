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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IportController = void 0;
const common_1 = require("@nestjs/common");
const iport_service_1 = require("./iport.service");
const create_iport_dto_1 = require("./dto/create-iport.dto");
const update_iport_dto_1 = require("./dto/update-iport.dto");
let IportController = class IportController {
    constructor(iportService) {
        this.iportService = iportService;
    }
    create(createIportDto) {
        return this.iportService.create(createIportDto);
    }
    findAll() {
        return this.iportService.findAll();
    }
    findOne(id) {
        return this.iportService.findOne(+id);
    }
    update(id, updateIportDto) {
        return this.iportService.update(+id, updateIportDto);
    }
    remove(id) {
        return this.iportService.remove(+id);
    }
};
exports.IportController = IportController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_iport_dto_1.CreateIportDto]),
    __metadata("design:returntype", void 0)
], IportController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IportController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IportController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_iport_dto_1.UpdateIportDto]),
    __metadata("design:returntype", void 0)
], IportController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IportController.prototype, "remove", null);
exports.IportController = IportController = __decorate([
    (0, common_1.Controller)('iport'),
    __metadata("design:paramtypes", [iport_service_1.IportService])
], IportController);
//# sourceMappingURL=iport.controller.js.map