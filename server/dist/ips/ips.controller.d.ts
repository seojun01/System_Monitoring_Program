import { IpsService } from './ips.service';
import { Observable } from 'rxjs';
interface MessageEvent {
    protoData: string;
    eventData: string;
    attackData: string;
    ipnportData: string;
}
export declare class IpsController {
    private readonly ipsService;
    private protoData;
    private eventData;
    private attackData;
    private ipnportData;
    constructor(ipsService: IpsService);
    getEvents(): Promise<Observable<MessageEvent>>;
}
export {};
