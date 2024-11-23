import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('api/notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  async sendNotification(@Body() sendNotificationDto: { userId: string; type: string; channel: string; content: any }) {
    return this.notificationsService.sendNotification(sendNotificationDto);
  }

  @Get(':userId/logs')
  async getNotificationLogs(@Param('userId') userId: string) {
    return this.notificationsService.getNotificationLogs(userId);
  }

  @Get('stats')
  async getNotificationStats() {
    return this.notificationsService.getNotificationStats();
  }
}
