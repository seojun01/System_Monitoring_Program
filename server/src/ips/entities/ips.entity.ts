import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'events' })
export class IpsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  timestamp: string;

  @Column({ type: 'varchar' })
  event_type: string;

  @Column({ type: 'varchar' })
  src_ip: string;

  @Column({ type: 'int' })
  src_port: number;

  @Column({ type: 'varchar' })
  dest_ip: string;

  @Column({ type: 'int' })
  dest_port: number;

  @Column({ type: 'varchar' })
  proto: string;

  @Column({ type: 'varchar' })
  signature: string;
}
