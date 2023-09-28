import * as Validator from 'class-validator';
import { User } from '../../../entities/user.entity';
import { CoreOutput } from 'src/login/common/dtos/coreOutput.dto';

export class LoginInput {
  @Validator.IsEmail({}, { message: '이메일을 입력해주세요.' })
  email: string;

  @Validator.Length(8, 100, {
    message: '비밀번호는 최소 8자 이상이어야 합니다.',
  })
  @Validator.IsString()
  password: string;
}

export class LoginOutput extends CoreOutput {
  user?: User;

  @Validator.IsString()
  accessToken?: string;
}

export class LogOutInput {
  @Validator.IsNumber()
  userId: number;
}
