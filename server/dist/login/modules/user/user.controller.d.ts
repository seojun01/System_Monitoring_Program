import { UserService } from './user.service';
import { User } from '../../entities/user.entity';
import { CoreOutput } from '../../common/dtos/coreOutput.dto';
import { CreateAccountDto } from './dto/createAccount.dto';
import { UpdateAccountDto } from './dto/updateAccount.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(): Promise<User[]>;
    createAccount(input: CreateAccountDto): Promise<CoreOutput>;
    profileUpdate(req: any, updateData: UpdateAccountDto): Promise<CoreOutput>;
    profile(req: any): Promise<User>;
    delete(id: number): Promise<CoreOutput>;
}
