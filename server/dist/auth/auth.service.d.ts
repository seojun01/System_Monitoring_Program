import { JwtService } from '@nestjs/jwt/dist';
export declare class AuthService {
    private readonly jwtModule;
    constructor(jwtModule: JwtService);
    getCookieWithJwtToken(userId: number): string;
    getCookieForLogOut(): string;
}
