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
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let IpsController = class IpsController {
    constructor(ipsService) {
        this.ipsService = ipsService;
        this.protoData = null;
        this.eventData = null;
        this.attackData = null;
        this.ipnportData = null;
        setInterval(async () => {
            try {
                const newProtoData = await this.ipsService.getProtocolCount();
                const newEventData = await this.ipsService.getEventType();
                const newAttackData = await this.ipsService.getAttack();
                const newipnportData = await this.ipsService.getIpAndPort();
                this.protoData = JSON.stringify(newProtoData);
                this.eventData = JSON.stringify(newEventData);
                this.attackData = JSON.stringify(newAttackData);
                this.ipnportData = JSON.stringify(newipnportData);
            }
            catch (error) {
                console.error('data select error', error);
            }
        }, 10000);
    }
    async getEvents() {
        return (0, rxjs_1.interval)(10000).pipe((0, operators_1.map)((_) => ({
            protoData: this.protoData,
            eventData: this.eventData,
            attackData: this.attackData,
            ipnportData: this.ipnportData,
        })));
    }
};
exports.IpsController = IpsController;
__decorate([
    (0, common_1.Sse)('/events'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IpsController.prototype, "getEvents", null);
exports.IpsController = IpsController = __decorate([
    (0, common_1.Controller)('ips'),
    __metadata("design:paramtypes", [ips_service_1.IpsService])
], IpsController);
//# sourceMappingURL=ips.controller.js.map