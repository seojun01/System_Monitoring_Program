"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../entities/user.entity");
const bcrypt = require("bcrypt");
const Validator = require("class-validator");
let UserService = exports.UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createAccount(input) {
        try {
            const exists = await this.userRepository.findOne({
                where: [{ email: input.email }],
            });
            if (exists) {
                return {
                    success: false,
                    target: 'email',
                    error: '이미 등록된 이메일입니다.',
                };
            }
            const user = await this.userRepository.save(this.userRepository.create({
                email: input.email,
                password: await bcrypt.hash(input.password, 10),
                name: input.name,
                mobile: input.mobile,
            }));
            return { success: true };
        }
        catch (e) {
            return { success: false, error: '계정 생성에 실패했습니다.' };
        }
    }
    async logInValidate(email, password) {
        try {
            let user = null;
            if (Validator.isEmail(email) && email.length >= 6) {
                user = await this.userRepository
                    .createQueryBuilder()
                    .select('*')
                    .where('email = :email', { email: email })
                    .getRawOne();
            }
            else {
                return { success: false, error: '잘못된 로그인 아이디입니다.' };
            }
            if (user && bcrypt.compareSync(password, user.password)) {
                console.log('인증 성공');
                return {
                    success: true,
                    user,
                };
            }
            return {
                success: false,
                error: '비밀번호 검증 실패',
            };
        }
        catch (error) {
            return { success: false, error: '로그인 검증 실패' };
        }
    }
    async getAll() {
        return this.userRepository.find();
    }
    async findById(id) {
        return await this.userRepository.findOneByOrFail({ id });
    }
    async profile(id) {
        return await this.userRepository.findOneBy({ id });
    }
    async delete(userId) {
        const result = await this.userRepository.delete(userId);
        if (result.affected === 0) {
            return { success: false, error: '해당 아이디는 존재하지 않습니다.' };
        }
        else {
            return { success: true };
        }
    }
    async update(userId, updateData) {
        try {
            await this.userRepository.update(userId, updateData);
            return {
                success: true,
            };
        }
        catch (error) {
            return {
                success: false,
                error: '유저 데이터 업데이트 실패',
            };
        }
    }
    async profileUpdate(user, updateData) {
        try {
            const thisEmail = user.email;
            const emailExists = await this.userRepository.findOne({
                where: [{ email: updateData.email }],
            });
            const mobileExists = await this.userRepository.findOne({
                where: [{ mobile: updateData.mobile }],
            });
            if (thisEmail != updateData.email && emailExists) {
                return {
                    success: false,
                    target: 'email',
                    error: '중복된 이메일입니다.',
                };
            }
            if (thisEmail != updateData.email && mobileExists) {
                return {
                    success: false,
                    error: '중복된 휴대전화 번호입니다.',
                };
            }
            const userData = {
                email: updateData.email,
                name: updateData.name,
                mobile: updateData.mobile,
            };
            if (updateData.password === '') {
                await this.userRepository.update(user.id, userData);
                return { success: true };
            }
            else {
                await this.userRepository.update(user.id, {
                    ...userData,
                    password: await bcrypt.hash(updateData.password, 10),
                });
                return {
                    success: true,
                };
            }
        }
        catch (e) {
            return {
                success: false,
                error: '유저 데이터 업데이트 실패',
            };
        }
    }
    async findOne(condition) {
        return this.userRepository.findOne(condition);
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map