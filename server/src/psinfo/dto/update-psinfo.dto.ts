import { PartialType } from '@nestjs/mapped-types';
import { CreatePsinfoDto } from './create-psinfo.dto';

export class UpdatePsinfoDto extends PartialType(CreatePsinfoDto) {}
