import { IsInt } from 'class-validator';

export namespace InfoDTO {
  export class getCPU {
    @IsInt()
    cpuUsage: number;

    @IsInt()
    cpuTemp: number;
  }
}
