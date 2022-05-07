import {
  Controller,
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param, 
  ValidationPipe 
} from '@nestjs/common';
import { AnimalDTO } from 'src/shared/domain/dto/animal.dto';
import { AnimalsService } from './animasl.service';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) { }

  @Get()
  private find() {
    return 'return all animals';
  }

  @Get('id')
  private findOne(@Param('id') params) {
    return "return animal with this id";
  }

  @Post()
  private insert(@Body(ValidationPipe) animal: AnimalDTO) {
    return "add animal";
  }

  @Put()
  private update(@Body(ValidationPipe) animal: AnimalDTO) {
    return "update animal";
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return "delete animal";
  }
}