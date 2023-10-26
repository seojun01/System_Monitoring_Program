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
    getEventType(): Promise<number>;
    getIpAndPort(): Promise<void>;
}
