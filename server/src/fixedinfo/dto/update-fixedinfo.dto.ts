import { PartialType } from '@nestjs/mapped-types';
import { CreateFixedinfoDto } from './create-fixedinfo.dto';

export class UpdateFixedinfoDto extends PartialType(CreateFixedinfoDto) {}
