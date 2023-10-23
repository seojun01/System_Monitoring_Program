import { Module } from '@nestjs/common';
import { PsinfoService } from './psinfo.service';
import { PsinfoController } from './psinfo.controller';
import { PsinfoEntity } from './entities/psinfo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PsinfoEntity])],
  controllers: [PsinfoController],
  providers: [PsinfoService],
})
export class PsinfoModule {}
