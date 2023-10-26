import { Module } from '@nestjs/common';
import { IpsService } from './ips.service';
import { IpsController } from './ips.controller';
import { IpsEntity } from './entities/ips.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([IpsEntity])],
  controllers: [IpsController],
  providers: [IpsService],
})
export class IpsModule {}
