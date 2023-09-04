import { Module } from '@nestjs/common';
import { FixedinfoService } from './fixedinfo.service';
import { FixedinfoController } from './fixedinfo.controller';
import { FixedEntity } from './entities/fixedinfo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FixedEntity])],
  controllers: [FixedinfoController],
  providers: [FixedinfoService],
})
export class FixedinfoModule {}
