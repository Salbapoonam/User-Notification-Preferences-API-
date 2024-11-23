export class UpdateUserPreferenceDto {
  preferences: {
    marketing?: boolean;
    newsletter?: boolean;
    updates?: boolean;
    frequency?: 'daily' | 'weekly' | 'monthly' | 'never';
    channels?: {
      email?: boolean;
      sms?: boolean;
      push?: boolean;
    };
  };
  timezone?: string;
}