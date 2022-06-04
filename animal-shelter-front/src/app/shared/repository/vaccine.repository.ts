import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Vaccine } from "src/app/common/interfaces/vaccine.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class VaccineRepository extends BaseRepository<Vaccine>{
  constructor(private readonly http: HttpClient) {
    super(http, 'vaccine')
  }
}