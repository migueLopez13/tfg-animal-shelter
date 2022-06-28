import { Injectable } from "@angular/core";
import { Adoption } from "src/app/shared/domain/interfaces/adoption.interface";
import { AdoptionsRepository } from "./repository/adoptions.repository";
import { BaseService } from "./base.service";
import { City } from "../domain/interfaces/city.interface";
import { AddressRepository } from "./repository/address.repository";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CitiesService extends BaseService<City> {
  constructor(private readonly addressRepository: AddressRepository) {
    super(addressRepository)
  }
  getSpainCities() {
    return this.addressRepository.findCities(207)
  }
}