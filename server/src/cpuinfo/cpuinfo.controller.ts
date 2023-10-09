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
  Sse,
} from '@nestjs/common';
import { CpuinfoService } from './cpuinfo.service';
import { cpuDataDTO } from './dto/cpuDataDTO.dto';
import { CpuEntity } from './entities/cpuinfo.entity';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller()
export class CpuinfoController {
  constructor(private readonly cpuinfoService: CpuinfoService) {}

  @Get('/cpuinfo')
  async findAll(): Promise<CpuEntity[]> {
    //console.log(JSON.parse(this.cpuinfoService.dbData));
    return this.cpuinfoService.getMany();
  }

  @Sse('/sse')
  async sse() {
    let data = await this.cpuinfoService.getOne();
    return interval(3000).pipe(
      map((_) => ({ data: { data } })),
    );
  }
}
