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
import { UserPhoneDTO } from 'src/shared/domain/dto/user-phone.dto';
import { UserPhoneService } from './user-phone.service';

@ApiTags('user-phone')
@Controller('user-phone')
export class UserPhoneController {
  constructor(private readonly phoneService: UserPhoneService) {}

  @Get()
  private find() {
    return this.phoneService.find();
  }

  @Get(':id')
  private findOne(@Param('id') params) {
    return this.phoneService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) phone: UserPhoneDTO) {
    return this.phoneService.insert(phone);
  }

  @Put()
  private update(@Body(ValidationPipe) phone: UserPhoneDTO) {
    return this.phoneService.update(phone);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.phoneService.delete(params);
  }
}
