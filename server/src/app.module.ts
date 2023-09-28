import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PacketinfoModule } from './packetinfo/packetinfo.module';
import { CpuinfoModule } from './cpuinfo/cpuinfo.module';
import { CpuEntity } from './cpuinfo/entities/cpuinfo.entity';
import { FixedinfoModule } from './fixedinfo/fixedinfo.module';
import { VarinfoModule } from './varinfo/varinfo.module';
import { User } from './login/entities/user.entity';
import { UserModule } from './login/modules/user/user.module';
import { AuthModule } from './login/modules/auth/auth.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DB_HOST: Joi.string(),
        DB_PORT: Joi.string(),
        DB_USERNAME: Joi.string(),
        DB_PASSWORD: Joi.string(),
        DB_NAME: Joi.string(),
        JWT_ACCESS_TOKEN_PRIVATE_KEY: Joi.string().required(),
        JWT_ACCESS_TOKEN_EXPIRATION: Joi.string().required(),
        JWT_REFRESH_TOKEN_PRIVATE_KEY: Joi.string().required(),
        JWT_REFRESH_TOKEN_EXPIRATION: Joi.string().required(),
        AWS_KEY: Joi.string(),
        AWS_SECRET: Joi.string(),
      }),
    }),
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
    UserModule,
    AuthModule,
    PacketinfoModule,
    CpuinfoModule,
    FixedinfoModule,
    VarinfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
