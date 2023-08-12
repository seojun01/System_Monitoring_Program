import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { AuthDTO } from 'src/auth/dto/authDto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(authDTO: AuthDTO.SignUp): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity>;
    findByNickname(nickname: string): Promise<UserEntity>;
}
