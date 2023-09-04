import { CpuinfoService } from './cpuinfo.service';
import { CpuEntity } from './entities/cpuinfo.entity';
export declare class CpuinfoController {
    private readonly cpuinfoService;
    constructor(cpuinfoService: CpuinfoService);
    findAll(): Promise<CpuEntity[]>;
}
