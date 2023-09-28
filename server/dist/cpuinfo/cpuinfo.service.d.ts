import { CpuEntity } from './entities/cpuinfo.entity';
import { Repository } from 'typeorm';
export declare class CpuinfoService {
    private cpuRepository;
    constructor(cpuRepository: Repository<CpuEntity>);
    dbData: CpuEntity[];
    findAll(): Promise<CpuEntity[]>;
    getMany(): Promise<CpuEntity[]>;
    getOne(): Promise<CpuEntity[]>;
}
