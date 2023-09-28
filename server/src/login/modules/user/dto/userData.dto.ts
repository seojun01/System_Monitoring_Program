import * as Validator from 'class-validator';
import { User } from 'src/login/entities/user.entity';
import { CoreOutput } from 'src/login/common/dtos/coreOutput.dto';

export class UserDataInput {
  @Validator.IsNumber()
  userId;
}

export class UserDataOutput extends CoreOutput {
  user?: User;
}
