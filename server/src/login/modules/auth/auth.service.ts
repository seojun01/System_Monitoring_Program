import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { User } from 'src/login/entities/user.entity';
import { UserService } from '../user/user.service';
import { AccessPayload, RefreshPayload } from './jwt/jwt.interfaces';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { UserDataOutput } from '../user/dto/userData.dto';
import { ConfigService } from '@nestjs/config';
import { AccessTokenOutput } from './dto/token.dto';
import { CoreOutput } from 'src/login/common/dtos/coreOutput.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async login(
    { email, password }: LoginInput,
    response: Response,
  ): Promise<LoginOutput> {
    try {
      const validateUser: UserDataOutput = await this.userService.logInValidate(
        email,
        password,
      );

      if (validateUser.success && validateUser.user != null) {
        const accessPayload: AccessPayload = {
          sub: validateUser.user.id,
        };
        const refreshPayload: RefreshPayload = {
          sub: validateUser.user.id,
        };
        console.log(
          'JWT_ACCESS_TOKEN_PRIVATE_KEY: ',
          this.config.get('JWT_ACCESS_TOKEN_PRIVATE_KEY'),
          this.config.get('JWT_ACCESS_TOKEN_EXPIRATION'),
          this.config.get('JWT_REFRESH_TOKEN_PRIVATE_KEY'),
          this.config.get('JWT_REFRESH_TOKEN_EXPIRATION'),
        );

        const [accessToken, refreshToken] = [
          await this.jwtService.signAsync(accessPayload),
          await this.jwtService.signAsync(refreshPayload, {
            secret: this.config.get('JWT_REFRESH_TOKEN_PRIVATE_KEY'),
            expiresIn: this.config.get('JWT_REFRESH_TOKEN_EXPIRATION'),
          }),
        ];
        console.log('Token : ', accessToken, refreshToken);

        response.cookie('rt', refreshToken, {
          path: '/',
          httpOnly: true,
          sameSite: 'strict',
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        });

        await this.userService.update(validateUser.user.id, {
          refreshToken,
        });

        return {
          success: true,
          accessToken,
          user: validateUser.user,
        };
      } else {
        return { success: false, error: validateUser.error };
      }
    } catch (e) {
      console.log('login err - ', e);
      return { success: false, error: '로그인에 실패하였습니다.' };
    }
  }

  async refreshToken(user: User, req: Request): Promise<AccessTokenOutput> {
    try {
      console.log('refreshToken: 스탭 1-1: ', user);
      const refreshToken = req.cookies['rt'];
      console.log('refreshToken: 스탭 2');

      if (
        !refreshToken ||
        !user ||
        !user.refreshToken ||
        refreshToken != user.refreshToken
      ) {
        console.log('refreshToken: 검증 불일치 오류');
        new UnauthorizedException();
      }
      console.log('refreshToken: 스탭 3');
      const accessPayload: AccessPayload = {
        sub: user.id,
      };

      const accessToken = await this.jwtService.signAsync(accessPayload);

      console.log('refreshToken: 검증');

      return { success: true, accessToken };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async logout(user: User, res: Response): Promise<CoreOutput> {
    try {
      console.log('접근1');

      res.cookie('rt', '', { maxAge: 0 });
      console.log('쿠키삭제2', user.id);

      await this.userService.update(user.id, {
        refreshToken: null,
      });
      console.log('접근3');
      return { success: true };
    } catch (e) {
      console.log('실패');
      return { success: false, error: '계정 생성에 실패하였습니다.' };
    }
  }
}
