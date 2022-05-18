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
import { ShelterDTO } from '../../shared/domain/dto/shelter.dto';
import { ShelterService } from './shelter.service';

@ApiTags('shelters')
@Controller('shelters')
export class SheltersController {
  constructor(private readonly shelterService: ShelterService) {}

  @Get()
  private find() {
    return this.shelterService.find();
  }

  @Get(':id')
  private findOne(@Param('id') params) {
    return this.shelterService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) shelter: ShelterDTO) {
    return this.shelterService.insert(shelter);
  }

  @Put()
  private update(@Body(ValidationPipe) shelter: ShelterDTO) {
    return this.shelterService.update(shelter);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.shelterService.delete(params);
  }
}
