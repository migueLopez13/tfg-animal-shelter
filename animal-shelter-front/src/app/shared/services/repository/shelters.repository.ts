import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Shelter } from "src/app/shared/domain/interfaces/shelter.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class SheltersRepository extends BaseRepository<Shelter>{
  constructor(private readonly http: HttpClient) {
    super(http, 'shelters')
  }
}