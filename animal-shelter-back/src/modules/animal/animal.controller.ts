import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { AnimalDTO } from 'src/shared/domain/dto/animal.dto';
import { AnimalsService } from './animal.service';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Get()
  private find() {
    return this.animalsService.find();
  }

  @Get('id')
  private findOne(@Param('id') params) {
    return this.animalsService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) animal: AnimalDTO) {
    return this.animalsService.insert(animal);
  }

  @Put()
  private update(@Body(ValidationPipe) animal: AnimalDTO) {
    return this.animalsService.update(animal);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.animalsService.delete(params);
  }
}
