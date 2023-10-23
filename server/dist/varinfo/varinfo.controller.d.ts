import { VarinfoService } from './varinfo.service';
import { Observable } from 'rxjs';
interface MessageEvent {
    data: string;
}
export declare class VarinfoController {
    private readonly varinfoService;
    private data;
    constructor(varinfoService: VarinfoService);
    findAll(): Promise<Observable<MessageEvent>>;
}
export {};
