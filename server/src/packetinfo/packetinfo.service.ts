import { Injectable } from '@nestjs/common';
import { CreatePacketinfoDto } from './dto/create-packetinfo.dto';
import { UpdatePacketinfoDto } from './dto/update-packetinfo.dto';
import { PacketEntity } from './entities/packetinfo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PacketinfoService {
  constructor(
    @InjectRepository(PacketEntity)
    private packetRepository: Repository<PacketEntity>,
  ) {}

  async findAll(): Promise<PacketEntity[]> {
    return this.packetRepository.find();
  }
}
