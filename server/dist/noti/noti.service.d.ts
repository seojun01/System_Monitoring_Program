import { CreateNotiDto } from './dto/create-noti.dto';
import { UpdateNotiDto } from './dto/update-noti.dto';
export declare class NotiService {
    create(createNotiDto: CreateNotiDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNotiDto: UpdateNotiDto): string;
    remove(id: number): string;
}
