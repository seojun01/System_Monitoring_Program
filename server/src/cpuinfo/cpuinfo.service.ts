import { Injectable } from '@nestjs/common';
import { CpuEntity } from './entities/cpuinfo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';
import { subscribe } from 'diagnostics_channel';

@Injectable()
export class CpuinfoService {
  constructor(
    @InjectRepository(CpuEntity)
    private cpuRepository: Repository<CpuEntity>,
  ) {}

  async getMany(): Promise<CpuEntity[]> {
    return this.cpuRepository.find({
      order: {
        id: 'DESC',
      },
      take: 10,
    });
  }

  async getOne(): Promise<CpuEntity[]> {
    return this.cpuRepository.find({
      order: {
        id: 'DESC',
      },
      take: 1,
    });
  }

}