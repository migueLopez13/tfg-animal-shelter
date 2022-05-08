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
import { AdoptionDTO } from 'src/shared/domain/dto/adoption.dto';
import { AdoptionsService } from './adoptions.service';

@Controller('adoptions')
export class AdoptionsController {
  constructor(private readonly adoptionsService: AdoptionsService) { }

  @Get()
  private find() {
    return this.adoptionsService.find();
  }

  @Get('id')
  private findOne(@Param('id') params) {
    return this.adoptionsService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) adoption: AdoptionDTO) {
    return this.adoptionsService.insert(adoption);
  }

  @Put()
  private update(@Body(ValidationPipe) adoption: AdoptionDTO) {
    return this.adoptionsService.update(adoption);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.adoptionsService.delete(params);
  }
}
