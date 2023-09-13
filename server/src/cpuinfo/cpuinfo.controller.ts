import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { CpuinfoService } from './cpuinfo.service';
import { CreateCpuinfoDto } from './dto/create-cpuinfo.dto';
import { UpdateCpuinfoDto } from './dto/update-cpuinfo.dto';
import { CpuEntity } from './entities/cpuinfo.entity';

@Controller()
export class CpuinfoController {
  constructor(private readonly cpuinfoService: CpuinfoService) {}

  @Get('/cpuinfo')
  async findAll(): Promise<CpuEntity[]> {
    return this.cpuinfoService.getMany();
  }
}
