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

@Controller('ips')
export class IpsController {
  constructor(private readonly ipsService: IpsService) {}

  @Get('/notification')
  async getNoti() {
    return this.ipsService.getNoti();
  }

  @Get('/eventype')
  async getEventType() {
    return this.ipsService.getEventType();
  }

  @Get('/protocol')
  async getProtocol() {
    return this.ipsService.getProtocolCount();
  }

  @Get('/attacks')
  async getAttackInfo() {
    return this.ipsService.getAttack();
  }

  @Get('/iport')
  async getIpAndPort() {
    return this.ipsService.getIpAndPort();
  }
}
