import { Injectable } from '@nestjs/common';
import { CreateFixedinfoDto } from './dto/create-fixedinfo.dto';
import { UpdateFixedinfoDto } from './dto/update-fixedinfo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FixedEntity } from './entities/fixedinfo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FixedinfoService {
  constructor(
    @InjectRepository(FixedEntity)
    private fixedRepository: Repository<FixedEntity>,
  ) {}

  async findAll(): Promise<FixedEntity[]> {
    return this.fixedRepository.find();
  }
}
