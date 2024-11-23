import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPreferencesService } from './user-preferences.service';
import { UserPreferencesController } from './user-preferences.controller';
import { UserPreference, UserPreferenceSchema } from './schemas/user-preference.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserPreference.name, schema: UserPreferenceSchema }
    ])
  ],
  providers: [UserPreferencesService],
  controllers: [UserPreferencesController],
})
export class UserPreferencesModule {}
