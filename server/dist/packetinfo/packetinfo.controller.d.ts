import { PacketinfoService } from './packetinfo.service';
import { PacketEntity } from './entities/packetinfo.entity';
export declare class PacketinfoController {
    private readonly packetinfoService;
    constructor(packetinfoService: PacketinfoService);
    findAll(): Promise<PacketEntity[]>;
}
