import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';
import { PacketinfoModule } from './packetinfo/packetinfo.module';
import { CpuinfoModule } from './cpuinfo/cpuinfo.module';
import { CpuEntity } from './cpuinfo/entities/cpuinfo.entity';
import { FixedinfoModule } from './fixedinfo/fixedinfo.module';
import { VarinfoModule } from './varinfo/varinfo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [`${__dirname}/**/entities/*.entity.{ts,js}`],
      synchronize: Boolean(process.env.DB_SYNC),
    }),
    AuthModule,
    UserModule,
    PacketinfoModule,
    CpuinfoModule,
    FixedinfoModule,
    VarinfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
