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
exports.IpsService = void 0;
const common_1 = require("@nestjs/common");
const ips_entity_1 = require("./entities/ips.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let IpsService = class IpsService {
    constructor(ipsRepository) {
        this.ipsRepository = ipsRepository;
    }
    async getNoti() {
        return this.ipsRepository.find({
            where: {
                event_type: 'drop',
            },
            take: 50,
        });
    }
    async getProtocolCount() {
        let tcpCount = await this.ipsRepository.count({ where: { proto: 'TCP' } });
        let udpCount = await this.ipsRepository.count({ where: { proto: 'UDP' } });
        return {
            tcp: tcpCount,
            udp: udpCount,
        };
    }
    async getEventType() {
        let dropCount = await this.ipsRepository.count({
            where: { event_type: 'drop' },
        });
        let flowCount = await this.ipsRepository.count({
            where: { event_type: 'flow' },
        });
        let alertCount = await this.ipsRepository.count({
            where: { event_type: 'alert' },
        });
        let statsCount = await this.ipsRepository.count({
            where: { event_type: 'stats' },
        });
        let sshCount = await this.ipsRepository.count({
            where: { event_type: 'ssh' },
        });
        let dnsCount = await this.ipsRepository.count({
            where: { event_type: 'dns' },
        });
        let httpCount = await this.ipsRepository.count({
            where: { event_type: 'http' },
        });
        let rdpCount = await this.ipsRepository.count({
            where: { event_type: 'rdp' },
        });
        return {
            drop: dropCount,
            flow: flowCount,
            alert: alertCount,
            stats: statsCount,
            ssh: sshCount,
            dns: dnsCount,
            http: httpCount,
            rdp: rdpCount,
        };
    }
    async getIpAndPort() {
        return await this.ipsRepository.find();
    }
    async getAttack() {
        let synScanCount = this.ipsRepository.count({
            where: { signature: 'SYN Scanning' },
        });
        let synFloodCount = this.ipsRepository.count({
            where: { signature: 'SYN Flooding' },
        });
        let finScanCount = this.ipsRepository.count({
            where: { signature: 'FIN Scanning' },
        });
        let xmasScanCount = this.ipsRepository.count({
            where: { signature: 'X-MAS Scanning' },
        });
        let nullScanCount = this.ipsRepository.count({
            where: { signature: 'NULL Scanning' },
        });
        return {
            synScan: synScanCount,
            synFlood: synFloodCount,
            finScan: finScanCount,
            xmasScan: xmasScanCount,
            nullScan: nullScanCount,
        };
    }
};
exports.IpsService = IpsService;
exports.IpsService = IpsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(ips_entity_1.IpsEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], IpsService);
//# sourceMappingURL=ips.service.js.map