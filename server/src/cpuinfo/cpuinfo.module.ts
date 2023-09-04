import { Module } from '@nestjs/common';
import { CpuinfoService } from './cpuinfo.service';
import { CpuinfoController } from './cpuinfo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CpuEntity } from './entities/cpuinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CpuEntity])],
  controllers: [CpuinfoController],
  providers: [CpuinfoService],
})
export class CpuinfoModule {}
