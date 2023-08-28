import { JwtService } from '@nestjs/jwt/dist';
import { AuthDTO } from './dto/authDto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly userService;
    private readonly jwtService;
    private readonly authService;
    constructor(userService: UserService, jwtService: JwtService, authService: AuthService);
    signin(authDTO: AuthDTO.SignIn, Response: any): Promise<any>;
    logOut(request: AuthDTO.SignIn, Response: any): Promise<any>;
}
