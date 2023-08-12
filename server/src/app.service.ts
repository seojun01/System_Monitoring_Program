import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAPI(): boolean {
    return true;
  }
}
