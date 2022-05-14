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
import { ShelterDTO } from 'src/shared/domain/dto/shelter.dto';
import { SheltersService } from './shelter.service';

@Controller('shelter')
export class SheltersController {
  constructor(private readonly sheltersService: SheltersService) {}

  @Get()
  private find() {
    return this.sheltersService.find();
  }

  @Get('id')
  private findOne(@Param('id') params) {
    return this.sheltersService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) shelter: ShelterDTO) {
    return this.sheltersService.insert(shelter);
  }

  @Put()
  private update(@Body(ValidationPipe) shelter: ShelterDTO) {
    return this.sheltersService.update(shelter);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.sheltersService.delete(params);
  }
}
