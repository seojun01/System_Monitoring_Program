"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const packetinfo_module_1 = require("./packetinfo/packetinfo.module");
const cpuinfo_module_1 = require("./cpuinfo/cpuinfo.module");
const fixedinfo_module_1 = require("./fixedinfo/fixedinfo.module");
const varinfo_module_1 = require("./varinfo/varinfo.module");
const user_module_1 = require("./login/modules/user/user.module");
const auth_module_1 = require("./login/modules/auth/auth.module");
const Joi = require("joi");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
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
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [`${__dirname}/**/entities/*.entity.{ts,js}`],
                synchronize: Boolean(process.env.DB_SYNC),
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            packetinfo_module_1.PacketinfoModule,
            cpuinfo_module_1.CpuinfoModule,
            fixedinfo_module_1.FixedinfoModule,
            varinfo_module_1.VarinfoModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map