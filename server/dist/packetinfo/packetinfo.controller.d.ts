import { PacketinfoService } from './packetinfo.service';
import { Observable } from 'rxjs';
interface MessageEvent {
    data: string;
}
export declare class PacketinfoController {
    private readonly packetinfoService;
    private data;
    constructor(packetinfoService: PacketinfoService);
    getMany(): Promise<Observable<MessageEvent>>;
}
export {};
