import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello from Analytics!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('User created:', data);
    this.analytics.push({
      email: data.email,
      created_at: new Date(),
    });

    return this.analytics;
  }

  getAnalytics() {
    return this.analytics;
  }
}
