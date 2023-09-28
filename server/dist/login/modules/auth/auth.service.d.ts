import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { User } from 'src/login/entities/user.entity';
import { UserService } from '../user/user.service';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { AccessTokenOutput } from './dto/token.dto';
import { CoreOutput } from 'src/login/common/dtos/coreOutput.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    private readonly config;
    constructor(userService: UserService, jwtService: JwtService, config: ConfigService);
    login({ email, password }: LoginInput, response: Response): Promise<LoginOutput>;
    refreshToken(user: User, req: Request): Promise<AccessTokenOutput>;
    logout(user: User, res: Response): Promise<CoreOutput>;
}
