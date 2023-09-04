import { FixedinfoService } from './fixedinfo.service';
import { FixedEntity } from './entities/fixedinfo.entity';
export declare class FixedinfoController {
    private readonly fixedinfoService;
    constructor(fixedinfoService: FixedinfoService);
    findAll(): Promise<FixedEntity[]>;
}
