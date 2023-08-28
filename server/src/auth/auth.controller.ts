import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  Res,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import * as bcrypt from 'bcrypt';

import { AuthDTO } from './dto/authDto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import * as fs from 'fs';

@Controller()
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

  @Post('/signin')
  async signin(@Body() authDTO: AuthDTO.SignIn, @Res() Response) {
    const { email, password } = authDTO;

    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('이메일 또는 비밀번호를 확인 해주세요.');
    }

    // compareSync : 주어진 문자열과 해시화된 문자열을 비교하여 일치 여부를 반환
    const isSamePassword = bcrypt.compareSync(password, user.password);
    if (!isSamePassword) {
      throw new UnauthorizedException('이메일 또는 비밀번호를 확인해 주세요.');
    }

    //Just Return accessToken
    /*const payload = {
      id: user.id,
    };
    const accessToken = this.jwtService.sign(payload);
    return accessToken;
    */

    const cookie = this.authService.getCookieWithJwtToken(user.id);
    Response.setHeader('Set-Cookie', cookie);
    user.password = undefined;
    return Response.send(user);
  }

  @Post('/logout')
  async logOut(@Req() request: AuthDTO.SignIn, @Res() Response) {
    Response.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
    return Response.sendStatus(200);
  }
}
