import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FixedinfoService } from './fixedinfo.service';
import { CreateFixedinfoDto } from './dto/create-fixedinfo.dto';
import { UpdateFixedinfoDto } from './dto/update-fixedinfo.dto';
import { FixedEntity } from './entities/fixedinfo.entity';

@Controller()
export class FixedinfoController {
  constructor(private readonly fixedinfoService: FixedinfoService) {}

  @Get('/fixedinfo')
  async findAll(): Promise<FixedEntity[]> {
    return this.fixedinfoService.findAll();
  }
}
