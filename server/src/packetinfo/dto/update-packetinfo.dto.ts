import { PartialType } from '@nestjs/mapped-types';
import { CreatePacketinfoDto } from './create-packetinfo.dto';

export class UpdatePacketinfoDto extends PartialType(CreatePacketinfoDto) {}
