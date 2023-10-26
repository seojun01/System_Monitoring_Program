//import { CpuinfoController } from './cpuinfo.controller';
import {
  Controller,
  Get,
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
import { fromEvent, interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface MessageEvent {
  data: string;
}

@Controller()
export class CpuinfoController {
  private data: string;
  constructor(private readonly cpuinfoService: CpuinfoService) {
    this.data = null;

    setInterval(async () => {
      try {
        const newData = await this.cpuinfoService.getMany();
        this.data = JSON.stringify(newData);
      } catch (error) {
        console.error('data select error', error);
      }
    }, 1000);
  }

  // @Get('/cpuinfo')
  // async findAll(): Promise<CpuEntity[]> {
  //   //console.log(JSON.parse(this.cpuinfoService.dbData));
  //   return this.cpuinfoService.getMany();
  // }

  @Sse('/cpuinfo')
  async getMany(): Promise<Observable<MessageEvent>> {
    //let data = await this.cpuinfoService.getOne();
    return interval(1000).pipe(map(() => ({ data: this.data })));
  }
}
