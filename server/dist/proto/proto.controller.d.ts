import { ProtoService } from './proto.service';
import { CreateProtoDto } from './dto/create-proto.dto';
import { UpdateProtoDto } from './dto/update-proto.dto';
export declare class ProtoController {
    private readonly protoService;
    constructor(protoService: ProtoService);
    create(createProtoDto: CreateProtoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProtoDto: UpdateProtoDto): string;
    remove(id: string): string;
}
