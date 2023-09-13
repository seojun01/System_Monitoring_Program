import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PacketinfoService } from './packetinfo.service';
import { CreatePacketinfoDto } from './dto/create-packetinfo.dto';
import { UpdatePacketinfoDto } from './dto/update-packetinfo.dto';
import { PacketEntity } from './entities/packetinfo.entity';

@Controller()
export class PacketinfoController {
  constructor(private readonly packetinfoService: PacketinfoService) {}

  @Get('/packetinfo')
  async findAll(): Promise<PacketEntity[]> {
    return this.packetinfoService.getMany();
  }
}
