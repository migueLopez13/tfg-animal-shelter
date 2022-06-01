import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AddressService } from './address.service';

@Controller()
export class AppController {
  constructor(private readonly addressService :AddressService){}
  
  @MessagePattern({ cmd: 'countries' })
  getcountries() {
    return 'codeCountry[] ';
  }

  @MessagePattern({ cmd: 'states' })
  getstates() {
    return 'codeState[]';
  }

  @MessagePattern({ cmd: 'cities' })
  getcities() {
    return 'codeCity[]';
  }
}
