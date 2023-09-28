import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { AccessTokenOutput } from './dto/token.dto';
import { CoreOutput } from 'src/login/common/dtos/coreOutput.dto';
import { Response } from 'express';
import { JwtRefreshAuthGuard } from './guards/jwtRefreshAuth.guard';
import { JwtAuthGuard } from './guards/jwtAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async LoginInput(
    @Body() input: LoginInput,
    @Res({ passthrough: true }) res: Response,
  ): Promise<LoginOutput> {
    return this.authService.login(input, res);
  }

  @Get('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  async refreshToken(@Req() req): Promise<AccessTokenOutput> {
    return this.authService.refreshToken(req.user, req);
  }

  @Get('logout')
  @UseGuards(JwtAuthGuard)
  async logout(
    @Req() req,
    @Res({ passthrough: true }) res: Response,
  ): Promise<CoreOutput> {
    console.log('logout: 접근');
    return this.authService.logout(req.user, res);
  }
}
