import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPreferencesModule } from './user-preferences/user-preferences.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/user-notifications'),
    UserPreferencesModule,
    NotificationsModule,
  ],
})
export class AppModule {}


