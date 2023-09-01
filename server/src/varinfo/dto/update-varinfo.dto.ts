import { PartialType } from '@nestjs/mapped-types';
import { CreateVarinfoDto } from './create-varinfo.dto';

export class UpdateVarinfoDto extends PartialType(CreateVarinfoDto) {}
