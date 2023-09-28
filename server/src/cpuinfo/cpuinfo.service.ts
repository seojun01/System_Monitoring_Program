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

  public dbData: CpuEntity[] = [];

  async findAll(): Promise<CpuEntity[]> {
    return this.cpuRepository.find();
  }

  async getMany(): Promise<CpuEntity[]> {
    return this.cpuRepository.find({
      order: {
        id: 'DESC',
      },
      take: 30,
    });
  }

  async getOne(): Promise<CpuEntity[]> {
    let data = await this.cpuRepository.find({
      order: {
        id: 'DESC',
      },
      take: 1,
    });

    this.dbData = data;
    return this.dbData;
  }
}