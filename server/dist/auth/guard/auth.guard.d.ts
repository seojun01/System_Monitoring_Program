import { ExecutionContext } from '@nestjs/common';
declare const AuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AuthGuard extends AuthGuard_base {
    canActivate(context: ExecutionContext): any;
}
export {};
