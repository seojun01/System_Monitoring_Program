import { User } from 'src/login/entities/user.entity';
import { CoreOutput } from 'src/login/common/dtos/coreOutput.dto';
export declare class UserDataInput {
    userId: any;
}
export declare class UserDataOutput extends CoreOutput {
    user?: User;
}
