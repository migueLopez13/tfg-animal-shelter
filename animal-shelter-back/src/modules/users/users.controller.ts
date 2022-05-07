import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  private helloWorld() {
    return 'Hello World!';
  }
}