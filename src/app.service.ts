import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRunning(): string {
    return `RUNNING 1.0.0`;
  }
}
