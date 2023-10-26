import { IpsService } from './ips.service';
import { IpsEntity } from './entities/ips.entity';
export declare class IpsController {
    private readonly ipsService;
    private data;
    constructor(ipsService: IpsService);
    getNoti(): Promise<IpsEntity[]>;
    getCount(): Promise<{
        tcp: number;
        udp: number;
    }>;
    getEventType(): Promise<number>;
}
