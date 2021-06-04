import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  //test
  @Get()
  home() {
    return 'Welcome to my Movie API';
  }
}
