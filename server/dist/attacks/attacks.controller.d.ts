import { AttacksService } from './attacks.service';
import { CreateAttackDto } from './dto/create-attack.dto';
import { UpdateAttackDto } from './dto/update-attack.dto';
export declare class AttacksController {
    private readonly attacksService;
    constructor(attacksService: AttacksService);
    create(createAttackDto: CreateAttackDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAttackDto: UpdateAttackDto): string;
    remove(id: string): string;
}
