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
import { ShelterDTO } from 'src/shared/domain/dto/shelter.dto';
import { SheltersService } from './shelters.service';

@Controller('shelter')
export class SheltersController {
  constructor(private readonly sheltersService: SheltersService) { }

  @Get()
  private find() {
    return 'return all shelters';
  }

  @Get('id')
  private findOne(@Param('id') params) {
    return "return shelter with this id";
  }

  @Post()
  private insert(@Body(ValidationPipe) shelter: ShelterDTO) {
    return "add shelter";
  }

  @Put()
  private update(@Body(ValidationPipe) shelter: ShelterDTO) {
    return "update shelter";
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return "delete shelter";
  }
}