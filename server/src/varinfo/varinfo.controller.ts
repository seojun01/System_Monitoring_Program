import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Sse,
} from '@nestjs/common';
import { VarinfoService } from './varinfo.service';
import { CreateVarinfoDto } from './dto/create-varinfo.dto';
import { UpdateVarinfoDto } from './dto/update-varinfo.dto';
import { VarEntity } from './entities/varinfo.entity';
import { Observable, interval, map } from 'rxjs';

interface MessageEvent {
  data: string;
}

@Controller()
export class VarinfoController {
  private data: string;
  constructor(private readonly varinfoService: VarinfoService) {
    this.data = null;

    setInterval(async () => {
      try {
        const newData = await this.varinfoService.getOne();
        this.data = JSON.stringify(newData);
      } catch(error) {
        console.error('data select error', error);
      }
    }, 1000)
  }

  @Sse('/varinfo')
  async findAll(): Promise<Observable<MessageEvent>> {
    return interval(1000).pipe(
      map(() => ({ data: this.data }))
    );
  }
}
