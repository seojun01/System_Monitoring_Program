import { CpuEntity } from './entities/cpuinfo.entity';
import { Repository } from 'typeorm';
export declare class CpuinfoService {
    private cpuRepository;
    constructor(cpuRepository: Repository<CpuEntity>);
    findAll(): Promise<CpuEntity[]>;
}
