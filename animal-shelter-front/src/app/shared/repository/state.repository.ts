import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { State } from "src/app/common/interfaces/state.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class StatesRepository extends BaseRepository<State>{
  constructor(private readonly http: HttpClient) {
    super(http, 'address/states')
  }
  getstatesByCountryId(countryId: string) {
    return this._http.get(`${this.baseUrl}/country/${countryId}`)
  }
}