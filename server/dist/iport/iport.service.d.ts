import { CreateIportDto } from './dto/create-iport.dto';
import { UpdateIportDto } from './dto/update-iport.dto';
export declare class IportService {
    create(createIportDto: CreateIportDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateIportDto: UpdateIportDto): string;
    remove(id: number): string;
}
