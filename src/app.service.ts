import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRunning(): string {
    return 'Hello World!';
  }
}
