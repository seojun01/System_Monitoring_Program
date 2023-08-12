import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './entities/user.entity';

@Module({
  //userrepository를 사용할 수 있도록 주입
  imports: [TypeOrmModule.forFeature([UserEntity])],
  //userService를 다른 곳에서 사용할 수 있도록 exports
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
