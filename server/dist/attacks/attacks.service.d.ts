import { CreateAttackDto } from './dto/create-attack.dto';
import { UpdateAttackDto } from './dto/update-attack.dto';
export declare class AttacksService {
    create(createAttackDto: CreateAttackDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAttackDto: UpdateAttackDto): string;
    remove(id: number): string;
}
