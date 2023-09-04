import { PartialType } from '@nestjs/mapped-types';
import { CreateCpuinfoDto } from './create-cpuinfo.dto';

export class UpdateCpuinfoDto extends PartialType(CreateCpuinfoDto) {}
