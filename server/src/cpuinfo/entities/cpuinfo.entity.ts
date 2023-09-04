import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cpuInfo' })
export class CpuEntity {
  @PrimaryGeneratedColumn() //autoincrement가 적용된 테코레이션
  id: number;

  @Column('time', { name: '_time' })
  _time: Date;

  @Column({ type: 'int' })
  cpuUsage: number;

  @Column({ type: 'int' })
  cpuTemp: number;
}
