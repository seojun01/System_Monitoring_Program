import { Injectable } from '@nestjs/common';
import { CreateVarinfoDto } from './dto/create-varinfo.dto';
import { UpdateVarinfoDto } from './dto/update-varinfo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VarEntity } from './entities/varinfo.entity';
import { Repository, getConnection } from 'typeorm';

@Injectable()
export class VarinfoService {
  constructor(
    @InjectRepository(VarEntity)
    private varRepository: Repository<VarEntity>,
  ) {}

  async findAll(): Promise<VarEntity[]> {
    return this.varRepository.find();
  }

  async getOne() {
    return this.varRepository.find({
      order: {
        id: 'DESC',
      },
      take: 1,
    });
  }
}
