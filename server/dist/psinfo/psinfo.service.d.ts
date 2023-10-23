import { PsinfoEntity } from './entities/psinfo.entity';
import { Repository } from 'typeorm';
export declare class PsinfoService {
    private psinfoRepository;
    constructor(psinfoRepository: Repository<PsinfoEntity>);
    getMany(): Promise<PsinfoEntity[]>;
}
