import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { SentryInterceptor } from '@ntegral/nestjs-sentry';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(SentryInterceptor)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
