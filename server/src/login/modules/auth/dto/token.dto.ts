import { CoreOutput } from 'src/login/common/dtos/coreOutput.dto';
import * as Validator from 'class-validator';

export class AccessTokenOutput extends CoreOutput {
  @Validator.IsString()
  accessToken?: string;
}
