import { Injectable } from '@nestjs/common';
import { CpuEntity } from './entities/cpuinfo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CpuinfoService {
  constructor(
    @InjectRepository(CpuEntity)
    private cpuRepository: Repository<CpuEntity>,
  ) {}

  async findAll(): Promise<CpuEntity[]> {
    return this.cpuRepository.find();
  }
}
