import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from './schemas/user-preference.schema';

@Injectable()
export class UserPreferencesService {
  constructor(@InjectModel(UserPreference.name) private userPreferenceModel: Model<UserPreference>) {}

  async create(createUserPreferenceDto: any) {
    const createdUserPreference = new this.userPreferenceModel(createUserPreferenceDto);
    return createdUserPreference.save();
  }

  async findByUserId(userId: string) {
    return this.userPreferenceModel.findOne({ userId }).exec();
  }

  async update(userId: string, updateUserPreferenceDto: any) {
    return this.userPreferenceModel.findOneAndUpdate({ userId }, updateUserPreferenceDto, { new: true }).exec();
  }

  async delete(userId: string) {
    return this.userPreferenceModel.findOneAndDelete({ userId }).exec();
  }
}
