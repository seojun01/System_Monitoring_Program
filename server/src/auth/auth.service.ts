import { JwtService } from '@nestjs/jwt/dist';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly jwtModule: JwtService) {}

  public getCookieWithJwtToken(userId: number) {
    const payload = { userId };
    const token = this.jwtModule.sign(payload);
    const maxAge = process.env.JWT_EXPIRE_TIM;
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=300s`;
  }

  public getCookieForLogOut() {
    const maxAge = process.env.JWT_EXPIRE_TIME;
    return `Authentication=; HttpOnly; Path=/; Max-Age=300s`;
  }
}
