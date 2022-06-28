import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { City } from "src/app/shared/domain/interfaces/city.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class CitiesRepository extends BaseRepository<City>{
  constructor(private readonly http: HttpClient) {
    super(http, 'address/cities')
  }
  getCitiesByCountryId(countryId: string) {
    return this._http.get(`${this.baseUrl}/country/${countryId}`)
  }
  getCitiesByStateId(stateId: string) {
    return this._http.get(`${this.baseUrl}/state/${stateId}`)
  }
}