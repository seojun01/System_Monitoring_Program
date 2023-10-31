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
exports.EventtypeController = void 0;
const common_1 = require("@nestjs/common");
const eventtype_service_1 = require("./eventtype.service");
const create_eventtype_dto_1 = require("./dto/create-eventtype.dto");
const update_eventtype_dto_1 = require("./dto/update-eventtype.dto");
let EventtypeController = class EventtypeController {
    constructor(eventtypeService) {
        this.eventtypeService = eventtypeService;
    }
    create(createEventtypeDto) {
        return this.eventtypeService.create(createEventtypeDto);
    }
    findAll() {
        return this.eventtypeService.findAll();
    }
    findOne(id) {
        return this.eventtypeService.findOne(+id);
    }
    update(id, updateEventtypeDto) {
        return this.eventtypeService.update(+id, updateEventtypeDto);
    }
    remove(id) {
        return this.eventtypeService.remove(+id);
    }
};
exports.EventtypeController = EventtypeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_eventtype_dto_1.CreateEventtypeDto]),
    __metadata("design:returntype", void 0)
], EventtypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventtypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventtypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_eventtype_dto_1.UpdateEventtypeDto]),
    __metadata("design:returntype", void 0)
], EventtypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventtypeController.prototype, "remove", null);
exports.EventtypeController = EventtypeController = __decorate([
    (0, common_1.Controller)('eventtype'),
    __metadata("design:paramtypes", [eventtype_service_1.EventtypeService])
], EventtypeController);
//# sourceMappingURL=eventtype.controller.js.map