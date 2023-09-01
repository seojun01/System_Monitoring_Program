import { VarEntity } from './entities/varinfo.entity';
import { Repository } from 'typeorm';
export declare class VarinfoService {
    private varRepository;
    constructor(varRepository: Repository<VarEntity>);
    findAll(): Promise<VarEntity[]>;
}
