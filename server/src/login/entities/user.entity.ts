import { coreEntity } from '../common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'user' })
export class User extends coreEntity {
  @Column({ unique: true, length: 32, comment: '이메일' })
  email: string;

  @Column({ select: false, length: 128 })
  password: string;

  @Column({ length: 32, comment: '이름' })
  name: string;

  @Column({ length: 16, comment: '전화번호' })
  mobile: string;

  @Column({ nullable: true, length: 255 })
  refreshToken?: string;
}
