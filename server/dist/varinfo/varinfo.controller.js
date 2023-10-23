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
exports.VarinfoController = void 0;
const common_1 = require("@nestjs/common");
const varinfo_service_1 = require("./varinfo.service");
const rxjs_1 = require("rxjs");
let VarinfoController = exports.VarinfoController = class VarinfoController {
    constructor(varinfoService) {
        this.varinfoService = varinfoService;
        this.data = null;
        setInterval(async () => {
            try {
                const newData = await this.varinfoService.getOne();
                this.data = JSON.stringify(newData);
            }
            catch (error) {
                console.error('data select error', error);
            }
        }, 1000);
    }
    async findAll() {
        return (0, rxjs_1.interval)(1000).pipe((0, rxjs_1.map)(() => ({ data: this.data })));
    }
};
__decorate([
    (0, common_1.Sse)('/varinfo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VarinfoController.prototype, "findAll", null);
exports.VarinfoController = VarinfoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [varinfo_service_1.VarinfoService])
], VarinfoController);
//# sourceMappingURL=varinfo.controller.js.map