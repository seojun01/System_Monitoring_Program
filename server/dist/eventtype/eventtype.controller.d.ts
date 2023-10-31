import { EventtypeService } from './eventtype.service';
import { CreateEventtypeDto } from './dto/create-eventtype.dto';
import { UpdateEventtypeDto } from './dto/update-eventtype.dto';
export declare class EventtypeController {
    private readonly eventtypeService;
    constructor(eventtypeService: EventtypeService);
    create(createEventtypeDto: CreateEventtypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEventtypeDto: UpdateEventtypeDto): string;
    remove(id: string): string;
}
