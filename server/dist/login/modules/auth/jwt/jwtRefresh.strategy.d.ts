import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { RefreshPayload } from './jwt.interfaces';
import { User } from 'src/login/entities/user.entity';
import { UserService } from '../../user/user.service';
declare const JwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private readonly config;
    private readonly userService;
    constructor(config: ConfigService, userService: UserService);
    validate(payload: RefreshPayload): Promise<User | null>;
}
export {};
