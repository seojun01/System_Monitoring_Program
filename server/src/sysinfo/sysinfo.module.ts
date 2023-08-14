import { Module } from '@nestjs/common';
import { SysinfoService } from './sysinfo.service';
import { SysinfoController } from './sysinfo.controller';

@Module({
  controllers: [SysinfoController],
  providers: [SysinfoService],
})
export class SysinfoModule {}
