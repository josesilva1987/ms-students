import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/running')
  getRunning(): string {
    return this.appService.getRunning();
  }
}
