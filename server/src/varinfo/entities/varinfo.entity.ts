import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'variableInfo' })
export class VarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  uptime: string;

  @Column({ type: 'int' })
  memusage: number;

  @Column({ type: 'int' })
  memavail: number;

  @Column({ type: 'int' })
  diskusage: number;
}
