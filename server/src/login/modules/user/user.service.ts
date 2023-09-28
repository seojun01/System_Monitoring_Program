import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { CreateAccountDto } from './dto/createAccount.dto';
import * as bcrypt from 'bcrypt';
import { CoreOutput } from 'src/login/common/dtos/coreOutput.dto';
import * as Validator from 'class-validator';
import { UserDataOutput } from './dto/userData.dto';
import { UpdateAccountDto } from './dto/updateAccount.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createAccount(input: CreateAccountDto): Promise<CoreOutput> {
    try {
      const exists = await this.userRepository.findOne({
        where: [{ email: input.email }],
      });
      if (exists) {
        return {
          success: false,
          target: 'email',
          error: '이미 등록된 이메일입니다.',
        };
      }

      const user = await this.userRepository.save(
        this.userRepository.create({
          email: input.email,
          password: await bcrypt.hash(input.password, 10),
          name: input.name,
          mobile: input.mobile,
        }),
      );

      return { success: true };
    } catch (e) {
      return { success: false, error: '계정 생성에 실패했습니다.' };
    }
  }

  async logInValidate(
    email: string,
    password: string,
  ): Promise<UserDataOutput> {
    try {
      let user: User = null;

      if (Validator.isEmail(email) && email.length >= 6) {
        user = await this.userRepository
          .createQueryBuilder()
          .select('*')
          .where('email = :email', { email: email })
          .getRawOne();
      } else {
        return { success: false, error: '잘못된 로그인 아이디입니다.' };
      }

      if (user && bcrypt.compareSync(password, user.password)) {
        console.log('인증 성공');
        return {
          success: true,
          user,
        };
      }
      return {
        success: false,
        error: '비밀번호 검증 실패',
      };
    } catch (error) {
      return { success: false, error: '로그인 검증 실패' };
    }
  }

  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOneByOrFail({ id });
  }

  async profile(id: number): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }

  async delete(userId: number): Promise<CoreOutput> {
    const result = await this.userRepository.delete(userId);
    if (result.affected === 0) {
      return { success: false, error: '해당 아이디는 존재하지 않습니다.' };
    } else {
      return { success: true };
    }
  }

  async update(userId: number, updateData: object): Promise<CoreOutput> {
    try {
      await this.userRepository.update(userId, updateData);
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        error: '유저 데이터 업데이트 실패',
      };
    }
  }

  async profileUpdate(
    user: User,
    updateData: UpdateAccountDto,
  ): Promise<CoreOutput> {
    try {
      const thisEmail = user.email;
      const emailExists = await this.userRepository.findOne({
        where: [{ email: updateData.email }],
      });
      const mobileExists = await this.userRepository.findOne({
        where: [{ mobile: updateData.mobile }],
      });

      if (thisEmail != updateData.email && emailExists) {
        return {
          success: false,
          target: 'email',
          error: '중복된 이메일입니다.',
        };
      }

      if (thisEmail != updateData.email && mobileExists) {
        return {
          success: false,
          error: '중복된 휴대전화 번호입니다.',
        };
      }

      const userData = {
        email: updateData.email,
        name: updateData.name,
        mobile: updateData.mobile,
      };

      if (updateData.password === '') {
        await this.userRepository.update(user.id, userData);
        return { success: true };
      } else {
        await this.userRepository.update(user.id, {
          ...userData,
          password: await bcrypt.hash(updateData.password, 10),
        });
        return {
          success: true,
        };
      }
    } catch (e) {
      return {
        success: false,
        error: '유저 데이터 업데이트 실패',
      };
    }
  }

  async findOne(condition: any): Promise<User> {
    return this.userRepository.findOne(condition);
  }
}
