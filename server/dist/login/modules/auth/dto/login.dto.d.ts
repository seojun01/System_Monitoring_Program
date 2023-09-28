import { User } from '../../../entities/user.entity';
import { CoreOutput } from 'src/login/common/dtos/coreOutput.dto';
export declare class LoginInput {
    email: string;
    password: string;
}
export declare class LoginOutput extends CoreOutput {
    user?: User;
    accessToken?: string;
}
export declare class LogOutInput {
    userId: number;
}
