import { IportService } from './iport.service';
import { CreateIportDto } from './dto/create-iport.dto';
import { UpdateIportDto } from './dto/update-iport.dto';
export declare class IportController {
    private readonly iportService;
    constructor(iportService: IportService);
    create(createIportDto: CreateIportDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateIportDto: UpdateIportDto): string;
    remove(id: string): string;
}
