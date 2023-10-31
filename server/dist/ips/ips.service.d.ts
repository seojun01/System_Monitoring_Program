import { IpsEntity } from './entities/ips.entity';
import { Repository } from 'typeorm';
export declare class IpsService {
    private ipsRepository;
    constructor(ipsRepository: Repository<IpsEntity>);
    getNoti(): Promise<IpsEntity[]>;
    getProtocolCount(): Promise<{
        tcp: number;
        udp: number;
    }>;
    getEventType(): Promise<{
        drop: number;
        flow: number;
        alert: number;
        stats: number;
        ssh: number;
        dns: number;
        http: number;
        rdp: number;
    }>;
    getIpAndPort(): Promise<IpsEntity[]>;
    getAttack(): Promise<{
        synScan: Promise<number>;
        synFlood: Promise<number>;
        finScan: Promise<number>;
        xmasScan: Promise<number>;
        nullScan: Promise<number>;
    }>;
}
