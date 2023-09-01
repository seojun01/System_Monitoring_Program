import { Module } from '@nestjs/common';
import { PacketinfoService } from './packetinfo.service';
import { PacketinfoController } from './packetinfo.controller';
import { PacketEntity } from './entities/packetinfo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PacketEntity])],
  controllers: [PacketinfoController],
  providers: [PacketinfoService],
})
export class PacketinfoModule {}
