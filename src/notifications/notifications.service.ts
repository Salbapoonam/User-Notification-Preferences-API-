import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLog } from './schemas/notification-log.schema.ts';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(NotificationLog.name) private notificationLogModel: Model<NotificationLog>,
  ) {}

  async sendNotification({ userId, type, channel, content }: { userId: string; type: string; channel: string; content: any }) {
    const notification = new this.notificationLogModel({
      userId,
      type,
      channel,
      status: 'pending',
      metadata: content,
    });
    await notification.save();

    // Simulate notification sending
    const notificationSent = Math.random() > 0.5; // Random success or failure

    if (notificationSent) {
      notification.status = 'sent';
      notification.sentAt = new Date();
    } else {
      notification.status = 'failed';
      notification.failureReason = 'Simulated failure';
    }

    await notification.save();
    return notification;
  }

  async getNotificationLogs(userId: string) {
    const logs = await this.notificationLogModel.find({ userId }).exec();
    if (!logs) {
      throw new NotFoundException(`Notification logs for user ${userId} not found`);
    }
    return logs;
  }

  async getNotificationStats() {
    const stats = await this.notificationLogModel.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);
    return stats;
  }
}
