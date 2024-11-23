import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from './schemas/user-preference.schema';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectModel(UserPreference.name) private userModel: Model<UserPreference>,
  ) {}

  async create(data: any) {
    return new this.userModel(data).save();
  }

  async findByUserId(userId: string) {
    return this.userModel.findOne({ userId }).exec();
  }

  async update(userId: string, data: any) {
    return this.userModel.findOneAndUpdate({ userId }, data, { new: true }).exec();
  }

  async delete(userId: string) {
    return this.userModel.findOneAndDelete({ userId }).exec();
  }
}
