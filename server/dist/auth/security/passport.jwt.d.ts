import { Strategy, VerifiedCallback } from 'passport-jwt';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: Payload, done: VerifiedCallback): Promise<UserEntity>;
}
export interface Payload {
    id: number;
}
export {};
