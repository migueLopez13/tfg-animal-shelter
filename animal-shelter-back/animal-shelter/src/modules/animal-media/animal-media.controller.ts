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
import { AnimalMediaDTO } from '../../shared/domain/dto/animal-media.dto';
import { AnimalMediaService } from './animal-media.service';

@ApiTags('animal-media')
@Controller('animal-media')
export class AnimalMediaController {
  constructor(private readonly mediaService: AnimalMediaService) {}

  @Get()
  private find() {
    return this.mediaService.find();
  }

  @Get(':id')
  private findOne(@Param('id') params) {
    return this.mediaService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) media: AnimalMediaDTO) {
    return this.mediaService.insert(media);
  }

  @Put()
  private update(@Body(ValidationPipe) media: AnimalMediaDTO) {
    return this.mediaService.update(media);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.mediaService.delete(params);
  }
}
