import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { RefreshPayload } from './jwt.interfaces';
import { User } from 'src/login/entities/user.entity';
import { UserService } from '../../user/user.service';
import { Passport } from 'passport';

const fromCookie = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['rt'];
  }
  return token;
};

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private readonly config: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: fromCookie,
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_REFRESH_TOKEN_PRIVATE_KEY'),
    });
  }

  async validate(payload: RefreshPayload): Promise<User | null> {
    let user = null;

    try {
      console.log('JwtRefreshStrategy: 접근');
      user = this.userService.findById(payload.sub);
      console.log('JwtRefreshStrategy: 검증');
    } catch (e) {
      console.log('JwtRefreshStrategy: 오류 - 1');
      throw new UnauthorizedException();
    }

    if (!user) {
      console.log('JwtRefreshStrategy: 오류 - 2');
      throw new UnauthorizedException();
    }

    return user;
  }
}
