import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'traffic' })
export class PacketEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'time' })
  _time: Date;

  @Column({ type: 'int' })
  reception: number;

  @Column({ type: 'int' })
  send: number;

  @Column({ type: 'int' })
  conn: number;
}
