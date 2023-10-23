import { CpuinfoService } from './cpuinfo.service';
import { Observable } from 'rxjs';
interface MessageEvent {
    data: string;
}
export declare class CpuinfoController {
    private readonly cpuinfoService;
    private data;
    constructor(cpuinfoService: CpuinfoService);
    getMany(): Promise<Observable<MessageEvent>>;
}
export {};
