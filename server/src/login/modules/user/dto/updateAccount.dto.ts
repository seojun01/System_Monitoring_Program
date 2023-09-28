import * as Validator from 'class-validator';

export class UpdateAccountDto {
  @Validator.IsEmail({}, { message: '이메일을 입력해주세요.' })
  @Validator.MaxLength(32, { message: '이메일은 6자 이상이어야 합니다.' })
  email: string;

  @Validator.MaxLength(128, {
    message: '비밀번호는 최소 8자 이상이어야 합니다.',
  })
  @Validator.IsString()
  password?: string;

  @Validator.Length(2, 30, { message: '이름은 최소 2자 이상이어야 합니다.' })
  @Validator.IsString()
  name: string;

  @Validator.Length(13, 13, { message: '휴대전화 번호를 입력해주세요.' })
  @Validator.IsString()
  mobile: string;
}
