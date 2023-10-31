import { CreateEventtypeDto } from './dto/create-eventtype.dto';
import { UpdateEventtypeDto } from './dto/update-eventtype.dto';
export declare class EventtypeService {
    create(createEventtypeDto: CreateEventtypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEventtypeDto: UpdateEventtypeDto): string;
    remove(id: number): string;
}
