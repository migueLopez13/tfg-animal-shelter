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
import { ApiTags } from '@nestjs/swagger';
import { AnimalDTO } from '../../shared/domain/dto/animal.dto';
import { AnimalService } from './animal.service';

@ApiTags('animals')
@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalService: AnimalService) { }

  @Get()
  private find() {
    return this.animalService.find();
  }

  @Get(':id')
  private findOne(@Param('id') params) {
    return this.animalService.findOne(params);
  }

  @Get('/kind/:kind')
  private findByKind(@Param('kind') params) {
    return this.animalService.findByKind(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) animal: AnimalDTO) {
    return this.animalService.insert(animal);
  }

  @Put()
  private update(@Body(ValidationPipe) animal: AnimalDTO) {
    return this.animalService.update(animal);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.animalService.delete(params);
  }
}
