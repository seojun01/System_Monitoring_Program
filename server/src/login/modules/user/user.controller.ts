import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';
import { CoreOutput } from '../../common/dtos/coreOutput.dto';
import { CreateAccountDto } from './dto/createAccount.dto';
import { JwtAuthGuard } from '../auth/guards/jwtAuth.guard';
import { UpdateAccountDto } from './dto/updateAccount.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Post('register')
  createAccount(@Body() input: CreateAccountDto): Promise<CoreOutput> {
    return this.userService.createAccount(input);
  }

  @Patch('modify')
  @UseGuards(JwtAuthGuard)
  profileUpdate(
    @Req() req,
    @Body() updateData: UpdateAccountDto,
  ): Promise<CoreOutput> {
    return this.userService.profileUpdate(req.user, updateData);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Req() req): Promise<User> {
    return await this.userService.profile(req.user.id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<CoreOutput> {
    return this.userService.delete(id);
  }
}
