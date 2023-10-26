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
import { IpsService } from './ips.service';
import { CreateIpDto } from './dto/create-ip.dto';
import { UpdateIpDto } from './dto/update-ip.dto';
import { fromEvent, interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IpsEntity } from './entities/ips.entity';

interface MessageEvent {
  data: string;
}

@Controller('ips')
export class IpsController {
  private data: string;
  constructor(private readonly ipsService: IpsService) {
    this.data = null;

    setInterval(async () => {
      try {
        const newData = await this.ipsService.getNoti();
        this.data = JSON.stringify(newData);
      } catch (error) {
        console.error('data select error', error);
      }
    }, 3000);
  }

  @Get('/notificate')
  async getNoti(): Promise<IpsEntity[]> {
    return this.ipsService.getNoti();
  }

  @Get('/proto')
  async getCount() {
    return this.ipsService.getProtocolCount();
  }

  @Get('/eventtype')
  async getEventType() {
    return this.ipsService.getEventType();
  }

  @Get('/attacks')
  async getAttack() {
    return this.ipsService.getAttack();
  }

  @Get('/iport')
  async getIpAndPort() {
    return this.ipsService.getIpAndPort();
  }
}
