import * as Validator from 'class-validator';
import { UserProfile } from '../types/userProfile.type';

export class UserProfileInput {
  @Validator.IsNumber()
  userId;
}

export class UserProfileOutput {
  @Validator.IsOptional()
  userProfile: UserProfile;
}
