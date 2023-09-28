import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { CreateAccountDto } from './dto/createAccount.dto';
import { CoreOutput } from 'src/login/common/dtos/coreOutput.dto';
import { UserDataOutput } from './dto/userData.dto';
import { UpdateAccountDto } from './dto/updateAccount.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createAccount(input: CreateAccountDto): Promise<CoreOutput>;
    logInValidate(email: string, password: string): Promise<UserDataOutput>;
    getAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    profile(id: number): Promise<User>;
    delete(userId: number): Promise<CoreOutput>;
    update(userId: number, updateData: object): Promise<CoreOutput>;
    profileUpdate(user: User, updateData: UpdateAccountDto): Promise<CoreOutput>;
    findOne(condition: any): Promise<User>;
}
