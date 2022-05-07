import { Controller, Get } from '@nestjs/common';

@Controller('shelter')
export class SheltersController {
  @Get()
  private helloWorld() {
    return 'Hello World!';
  }
}