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
exports.PsinfoController = void 0;
const common_1 = require("@nestjs/common");
const psinfo_service_1 = require("./psinfo.service");
const rxjs_1 = require("rxjs");
let PsinfoController = exports.PsinfoController = class PsinfoController {
    constructor(psinfoService) {
        this.psinfoService = psinfoService;
        this.data = null;
        setInterval(async () => {
            try {
                const newData = await this.psinfoService.getMany();
                this.data = JSON.stringify(newData);
            }
            catch (error) {
                console.error('data select error', error);
            }
        }, 1000);
    }
    async getMany() {
        return (0, rxjs_1.interval)(1000).pipe((0, rxjs_1.map)(() => ({ data: this.data })));
    }
    ;
};
__decorate([
    (0, common_1.Sse)('/psinfo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PsinfoController.prototype, "getMany", null);
exports.PsinfoController = PsinfoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [psinfo_service_1.PsinfoService])
], PsinfoController);
//# sourceMappingURL=psinfo.controller.js.map