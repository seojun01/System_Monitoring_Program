import { PsinfoService } from './psinfo.service';
import { Observable } from 'rxjs';
interface MessageEvent {
    data: string;
}
export declare class PsinfoController {
    private readonly psinfoService;
    private data;
    constructor(psinfoService: PsinfoService);
    getMany(): Promise<Observable<MessageEvent>>;
}
export {};
