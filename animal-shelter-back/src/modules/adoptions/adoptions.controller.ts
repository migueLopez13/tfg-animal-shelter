import { Controller, Get } from '@nestjs/common';

@Controller('adoptions')
export class AdoptionsController {
  @Get()
  private helloWorld() {
    return 'Hello World!';
  }
}