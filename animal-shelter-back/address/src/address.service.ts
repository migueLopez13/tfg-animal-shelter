import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService {
  constructor() { }

  getCountries(): string {
    return 'Hello World!';
  }
  getStates(): string {
    return 'Hello World!';
  }
  getcities(): string {
    return 'Hello World!';
  }
  getCountry(): string {
    return 'Hello World!';
  }
}
