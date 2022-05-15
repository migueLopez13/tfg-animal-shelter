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
import { VaccineDTO } from 'src/shared/domain/dto/vaccine.dto';
import { VaccineService } from './vaccine.service';

@ApiTags('vaccines')
@Controller('vaccines')
export class VaccinesController {
  constructor(private readonly vaccineService: VaccineService) {}

  @Get()
  private find() {
    return this.vaccineService.find();
  }

  @Get(':id')
  private findOne(@Param('id') params) {
    return this.vaccineService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) vaccine: VaccineDTO) {
    return this.vaccineService.insert(vaccine);
  }

  @Put()
  private update(@Body(ValidationPipe) vaccine: VaccineDTO) {
    return this.vaccineService.update(vaccine);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.vaccineService.delete(params);
  }
}
