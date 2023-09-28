import { AuthService } from './auth.service';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { AccessTokenOutput } from './dto/token.dto';
import { CoreOutput } from 'src/login/common/dtos/coreOutput.dto';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    LoginInput(input: LoginInput, res: Response): Promise<LoginOutput>;
    refreshToken(req: any): Promise<AccessTokenOutput>;
    logout(req: any, res: Response): Promise<CoreOutput>;
}
