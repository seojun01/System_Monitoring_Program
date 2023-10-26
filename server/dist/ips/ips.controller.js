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
exports.IpsController = void 0;
const common_1 = require("@nestjs/common");
const ips_service_1 = require("./ips.service");
let IpsController = class IpsController {
    constructor(ipsService) {
        this.ipsService = ipsService;
        this.data = null;
        setInterval(async () => {
            try {
                const newData = await this.ipsService.getNoti();
                this.data = JSON.stringify(newData);
            }
            catch (error) {
                console.error('data select error', error);
            }
        }, 3000);
    }
    async getNoti() {
        return this.ipsService.getNoti();
    }
    async getCount() {
        return this.ipsService.getProtocolCount();
    }
    async getEventType() {
        return this.ipsService.getEventType();
    }
};
exports.IpsController = IpsController;
__decorate([
    (0, common_1.Get)('/notificate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IpsController.prototype, "getNoti", null);
__decorate([
    (0, common_1.Get)('/proto'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IpsController.prototype, "getCount", null);
__decorate([
    (0, common_1.Get)('/eventtype'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IpsController.prototype, "getEventType", null);
exports.IpsController = IpsController = __decorate([
    (0, common_1.Controller)('ips'),
    __metadata("design:paramtypes", [ips_service_1.IpsService])
], IpsController);
//# sourceMappingURL=ips.controller.js.map