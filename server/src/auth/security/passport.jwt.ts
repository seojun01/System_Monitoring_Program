import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'userAuthKey',
    });
  }

  async validate(
    payload: Payload,
    done: VerifiedCallback,
  ): Promise<UserEntity> {
    const { id } = payload;
    const user = await this.userService.findById(id);
    if (!user) {
      throw new UnauthorizedException({ message: '회원 존재하지 않음.' });
    }

    return user;
  }
}

export interface Payload {
  id: number;
}
