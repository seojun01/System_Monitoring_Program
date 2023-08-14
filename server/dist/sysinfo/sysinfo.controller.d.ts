import { SysinfoService } from './sysinfo.service';
export declare class SysinfoController {
    private readonly sysinfoService;
    constructor(sysinfoService: SysinfoService);
    getSysinfo(Request: any, Response: any): any;
}
