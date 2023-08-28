import { IsEmail, IsString, Length } from 'class-validator';

export namespace AuthDTO {
  export class SignUp {
    @IsEmail()
    email: string;

    @IsString()
    @Length(4, 20) // password min&max length
    password: string;

    @IsString()
    nickname: string;
  }

  export class SignIn {
    @IsEmail()
    email: string;

    @IsString()
    @Length(4, 20)
    password: string;
  }
}
