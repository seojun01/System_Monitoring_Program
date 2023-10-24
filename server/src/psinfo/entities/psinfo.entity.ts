import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'psInfo' })
export class PsinfoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'time' })
    _time: Date;

    @Column({ type: 'int' })
    pid: number;
    
    @Column({ type: 'float' })
    cpuUsageDetail: number;

    @Column({ type: 'float' })
    memUsageDetail: number;

    @Column({ type: 'varchar' })
    command: string;
}
