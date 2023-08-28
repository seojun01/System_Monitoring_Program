import { UserService } from './user.service';
import { AuthDTO } from 'src/auth/dto/authDto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signup(authDTO: AuthDTO.SignUp): Promise<string>;
    getProfile(req: any): Promise<any>;
}
