import { NotiService } from './noti.service';
import { CreateNotiDto } from './dto/create-noti.dto';
import { UpdateNotiDto } from './dto/update-noti.dto';
export declare class NotiController {
    private readonly notiService;
    constructor(notiService: NotiService);
    create(createNotiDto: CreateNotiDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateNotiDto: UpdateNotiDto): string;
    remove(id: string): string;
}
