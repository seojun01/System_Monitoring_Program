import { coreEntity } from '../common/entities/core.entity';
export declare class User extends coreEntity {
    email: string;
    password: string;
    name: string;
    mobile: string;
    refreshToken?: string;
}
