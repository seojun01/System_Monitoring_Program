import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VarinfoService } from './varinfo.service';
import { CreateVarinfoDto } from './dto/create-varinfo.dto';
import { UpdateVarinfoDto } from './dto/update-varinfo.dto';
import { VarEntity } from './entities/varinfo.entity';

@Controller('varinfo')
export class VarinfoController {
  constructor(private readonly varinfoService: VarinfoService) {}

  @Get('/1')
  async findAll(): Promise<VarEntity[]> {
    return this.varinfoService.findAll();
  }
}
