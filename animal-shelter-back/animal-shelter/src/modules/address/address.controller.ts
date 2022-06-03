import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { AddressService } from './address.service';

@ApiTags('address')
@Controller('address')
export class AddressController {
  constructor(private readonly address: AddressService) { }

  @Get('countries')
  private findAllCountries() {
    return this.address.getCountries;
  }

  @Get('countries/:id')
  private findOneCountry(@Param('id') params) {
    return this.address.getCountry(params);
  }

  @Get('states')
  private findAllStates() {
    return this.address.getStates();
  }

  @Get('states/:id')
  private findOneState(@Param('id') params) {
    return this.address.getState(params);
  }

  @Get('states/country/:id')
  private findAllStatesByCountry(@Param('id') params) {
    return this.address.getStatesByCountry(params);
  }

  @Get('cities/:id')
  private findOneCity(@Param('id') params) {
    return this.address.getCity(params);
  }

  @Get('cities/country/:id')
  private findAllCitiesByCountry(@Param('id') params) {
    return this.address.getCitiesByCountry(params);
  }

  @Get('cities/state/:id')
  private findAllCitiesByState(@Param('id') params) {
    return this.address.getCitiesByState(params);
  }
}
