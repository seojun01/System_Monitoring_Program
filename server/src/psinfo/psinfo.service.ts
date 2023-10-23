import { Injectable } from '@nestjs/common';
import { CreatePsinfoDto } from './dto/create-psinfo.dto';
import { UpdatePsinfoDto } from './dto/update-psinfo.dto';
import { PsinfoEntity } from './entities/psinfo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PsinfoService {
  constructor(
    @InjectRepository(PsinfoEntity)
    private psinfoRepository: Repository<PsinfoEntity>,
  ) {}

  async getMany() {
    return this.psinfoRepository.find({
      order: {
        id: 'DESC',
      },
      take: 5,
    });
  }
}
