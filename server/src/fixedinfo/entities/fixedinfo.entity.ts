import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity({ name: 'fixedInfo' })
export class FixedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  host: string;

  @Column({ type: 'varchar' })
  osver: string;

  @Column({ type: 'varchar' })
  kernelver: string;

  @Column({ type: 'int' })
  totaldisk: number;
}
