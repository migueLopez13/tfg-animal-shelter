import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class AddressService {
  constructor(
    @Inject('ADDRESS_SERVICE') private client: ClientProxy
  ) { }

  getCountries = () => this.client.send({ cmd: 'countries' }, null)

  getCountry = (id: string) => this.client.send({ cmd: 'country' }, id)

  getStates = () => this.client.send({ cmd: 'states' }, null)

  getStatesByCountry = (id: string) => this.client.send({ cmd: 'statesOfCountry' }, id)

  getState = (id: string) => this.client.send({ cmd: 'state' }, id)

  getCitiesByCountry = (id: string) => this.client.send({ cmd: 'citiesByCountry' }, id)

  getCitiesByState = (id: string) => this.client.send({ cmd: 'citiesByState' }, id)

  getCity = (id: string) => this.client.send({ cmd: 'city' }, id)

}
