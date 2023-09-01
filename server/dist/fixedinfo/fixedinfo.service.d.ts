import { FixedEntity } from './entities/fixedinfo.entity';
import { Repository } from 'typeorm';
export declare class FixedinfoService {
    private fixedRepository;
    constructor(fixedRepository: Repository<FixedEntity>);
    findAll(): Promise<FixedEntity[]>;
}
