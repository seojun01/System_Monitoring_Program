import { VarinfoService } from './varinfo.service';
import { VarEntity } from './entities/varinfo.entity';
export declare class VarinfoController {
    private readonly varinfoService;
    constructor(varinfoService: VarinfoService);
    findAll(): Promise<VarEntity[]>;
}
