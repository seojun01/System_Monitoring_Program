import {
  Controller,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { SysinfoService } from './sysinfo.service';
import * as fs from 'fs';

@Controller()
export class SysinfoController {
  constructor(private readonly sysinfoService: SysinfoService) {}

  @Get('/sysinfo')
  getSysinfo(@Req() Request, @Res() Response) {
    const file = fs.readFileSync('src/sysinfo/data/sysinfo.txt', 'utf8');

    return Response.send(file);
  }
}
