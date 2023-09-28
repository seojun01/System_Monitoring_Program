import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AccessPayload } from './jwt.interfaces';
import { User } from 'src/login/entities/user.entity';
import { UserService } from '../../user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly config;
    private readonly userService;
    constructor(config: ConfigService, userService: UserService);
    validate(payload: AccessPayload): Promise<User | null>;
}
export {};
