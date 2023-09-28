import { PacketEntity } from './entities/packetinfo.entity';
import { Repository } from 'typeorm';
export declare class PacketinfoService {
    private packetRepository;
    constructor(packetRepository: Repository<PacketEntity>);
    findAll(): Promise<PacketEntity[]>;
    getMany(): Promise<PacketEntity[]>;
}
