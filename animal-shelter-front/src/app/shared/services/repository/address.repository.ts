import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { City } from "../../domain/interfaces/city.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class AddressRepository extends BaseRepository<City>{
  constructor(private readonly http: HttpClient) {
    super(http, 'address/cities/country')
  }
  findCities(id: string | number): Observable<City[]> {
    return this._http.get<City[]>(`${this.baseUrl}/${id}`)
  }
}