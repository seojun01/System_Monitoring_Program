import { CpuinfoService } from './cpuinfo.service';
import { CpuEntity } from './entities/cpuinfo.entity';
import { Observable } from 'rxjs';
export declare class CpuinfoController {
    private readonly cpuinfoService;
    constructor(cpuinfoService: CpuinfoService);
    findAll(): Promise<CpuEntity[]>;
    sse(): Promise<Observable<{
        data: {
            data: CpuEntity[];
        };
    }>>;
}
