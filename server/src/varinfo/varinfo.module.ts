import { Module } from '@nestjs/common';
import { VarinfoService } from './varinfo.service';
import { VarinfoController } from './varinfo.controller';
import { VarEntity } from './entities/varinfo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VarEntity])],
  controllers: [VarinfoController],
  providers: [VarinfoService],
})
export class VarinfoModule {}
