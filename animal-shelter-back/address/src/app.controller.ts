import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CitiesService } from './services/cities.service';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';

@Controller()
export class AppController {
  constructor(
    private readonly countries: CountriesService,
    private readonly states: StatesService,
    private readonly cities: CitiesService
  ) { }

  @MessagePattern({ cmd: 'countries' })
  async getcountries() {
    return await this.countries.getCountries();
  }

  @MessagePattern({ cmd: 'country' })
  async getcountry(id: string) {
    return await this.countries.getCountry(id);
  }

  @MessagePattern({ cmd: 'states' })
  async getstates() {
    return await this.states.getStates();
  }

  @MessagePattern({ cmd: 'statesByCountry' })
  async getstatesByCountry(idCountry: string) {
    return await this.states.getStatesByCountry(idCountry);
  }

  @MessagePattern({ cmd: 'state' })
  async getstate(id: string) {
    return await this.states.getState(id);
  }

  @MessagePattern({ cmd: 'citiesByCountry' })
  async getcities(idCountry: string) {
    return await this.cities.getCitiesByCountry(idCountry);
  }

  @MessagePattern({ cmd: 'citiesByState' })
  async getcitiesByState(idState: string) {
    return await this.cities.getCitiesByState(idState);
  }

  @MessagePattern({ cmd: 'city' })
  async getcity(id: string) {
    return await this.cities.getCity(id);
  }
}
