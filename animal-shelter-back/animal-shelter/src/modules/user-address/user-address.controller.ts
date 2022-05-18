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
import { UserAddressDTO } from '../../shared/domain/dto/user-address.dto';
import { UserAddressService } from './user-address.service';

@ApiTags('user-address')
@Controller('user-address')
export class UserAddressController {
  constructor(private readonly addressService: UserAddressService) {}

  @Get()
  private find() {
    return this.addressService.find();
  }

  @Get(':id')
  private findOne(@Param('id') params) {
    return this.addressService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) address: UserAddressDTO) {
    return this.addressService.insert(address);
  }

  @Put()
  private update(@Body(ValidationPipe) address: UserAddressDTO) {
    return this.addressService.update(address);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.addressService.delete(params);
  }
}
