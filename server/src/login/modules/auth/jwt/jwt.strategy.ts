import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { AccessPayload } from './jwt.interfaces';
import { User } from 'src/login/entities/user.entity';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly config: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_ACCESS_TOKEN_PRIVATE_KEY'),
    });
  }

  async validate(payload: AccessPayload): Promise<User | null> {
    console.log('JwtStrategy: 접근');

    let user = null;
    try {
      user = this.userService.findById(payload.sub);
      console.log('JwtStrategy: 결과', user);
    } catch (e) {
      console.log('JwtStrategy: 오류 -1');
      throw new UnauthorizedException();
    }

    if (!user) {
      console.log('JwtStrategy: 오류 - 2');
      throw new UnauthorizedException();
    }

    return user;
  }
}
