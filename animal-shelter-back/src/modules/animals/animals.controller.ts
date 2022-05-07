import { Controller, Get } from '@nestjs/common';

@Controller('animals')
export class AnimalsController {
  @Get()
  private helloWorld() {
    return 'Hello World!';
  }
}