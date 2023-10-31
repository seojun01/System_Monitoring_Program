import { CreateProtoDto } from './dto/create-proto.dto';
import { UpdateProtoDto } from './dto/update-proto.dto';
export declare class ProtoService {
    create(createProtoDto: CreateProtoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProtoDto: UpdateProtoDto): string;
    remove(id: number): string;
}
