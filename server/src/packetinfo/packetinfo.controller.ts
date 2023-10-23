import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Sse,
} from '@nestjs/common';
import { PacketinfoService } from './packetinfo.service';
import { CreatePacketinfoDto } from './dto/create-packetinfo.dto';
import { UpdatePacketinfoDto } from './dto/update-packetinfo.dto';
import { PacketEntity } from './entities/packetinfo.entity';
import { interval, Observable, map } from 'rxjs';

interface MessageEvent {
  data: string;
}

@Controller()
export class PacketinfoController {
  private data: string;
  constructor(private readonly packetinfoService: PacketinfoService) {
    this.data = null;

    setInterval(async () => {
      try {
        const newData = await this.packetinfoService.getMany();
        this.data = JSON.stringify(newData);
      } catch(error) {
        console.error('data select error', error);
      }
    }, 1000)
  }

  @Sse('/packetinfo')
  async getMany(): Promise<Observable<MessageEvent>> {
    return interval(1000).pipe(map(() => ({ data: this.data })))
  };
}
