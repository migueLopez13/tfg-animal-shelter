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
    return 'return all adoptions';
  }

  @Get('id')
  private findOne(@Param('id') params) {
    return "return adoption with this id";
  }

  @Post()
  private insert(@Body(ValidationPipe) adoption: AdoptionDTO) {
    return "add adoption";
  }

  @Put()
  private update(@Body(ValidationPipe) adoption: AdoptionDTO) {
    return "update adoption";
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return "delete adoption";
  }
}
