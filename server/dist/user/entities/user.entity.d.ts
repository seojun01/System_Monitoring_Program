export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    nickname: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    private beforeInsert;
}
