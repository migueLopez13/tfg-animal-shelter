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
import { ShelterMediaDTO } from 'src/shared/domain/dto/shelter-media.dto';
import { ShelterMediaService } from './shelter-media.service';

@ApiTags('shelter-media')
@Controller('shelter-media')
export class ShelterMediaController {
  constructor(private readonly mediaService: ShelterMediaService) {}

  @Get()
  private find() {
    return this.mediaService.find();
  }

  @Get(':id')
  private findOne(@Param('id') params) {
    return this.mediaService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) media: ShelterMediaDTO) {
    return this.mediaService.insert(media);
  }

  @Put()
  private update(@Body(ValidationPipe) media: ShelterMediaDTO) {
    return this.mediaService.update(media);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.mediaService.delete(params);
  }
}
