import { Controller, Get, Post, Body, Patch, Param, Delete, Sse } from '@nestjs/common';
import { PsinfoService } from './psinfo.service';
import { CreatePsinfoDto } from './dto/create-psinfo.dto';
import { UpdatePsinfoDto } from './dto/update-psinfo.dto';
import { interval, Observable, map } from 'rxjs';

interface MessageEvent {
  data: string;
}

@Controller()
export class PsinfoController {
  private data: string;
  constructor(private readonly psinfoService: PsinfoService) {
    this.data = null;
    
    setInterval(async () => {
      try {
        const newData = await this.psinfoService.getMany();
        this.data = JSON.stringify(newData);
      } catch(error) {
        console.error('data select error', error);
      }
    }, 1000)
  }

  @Sse('/psinfo')
  async getMany(): Promise<Observable<MessageEvent>> {
    return interval(1000).pipe(map(() => ({ data: this.data })))
  };
}
