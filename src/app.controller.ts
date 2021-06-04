import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  //tests
  @Get()
  home() {
    return 'Welcome to my Movie API';
  }
}
