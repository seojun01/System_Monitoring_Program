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
exports.AttacksController = void 0;
const common_1 = require("@nestjs/common");
const attacks_service_1 = require("./attacks.service");
const create_attack_dto_1 = require("./dto/create-attack.dto");
const update_attack_dto_1 = require("./dto/update-attack.dto");
let AttacksController = class AttacksController {
    constructor(attacksService) {
        this.attacksService = attacksService;
    }
    create(createAttackDto) {
        return this.attacksService.create(createAttackDto);
    }
    findAll() {
        return this.attacksService.findAll();
    }
    findOne(id) {
        return this.attacksService.findOne(+id);
    }
    update(id, updateAttackDto) {
        return this.attacksService.update(+id, updateAttackDto);
    }
    remove(id) {
        return this.attacksService.remove(+id);
    }
};
exports.AttacksController = AttacksController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attack_dto_1.CreateAttackDto]),
    __metadata("design:returntype", void 0)
], AttacksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AttacksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttacksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_attack_dto_1.UpdateAttackDto]),
    __metadata("design:returntype", void 0)
], AttacksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AttacksController.prototype, "remove", null);
exports.AttacksController = AttacksController = __decorate([
    (0, common_1.Controller)('attacks'),
    __metadata("design:paramtypes", [attacks_service_1.AttacksService])
], AttacksController);
//# sourceMappingURL=attacks.controller.js.map