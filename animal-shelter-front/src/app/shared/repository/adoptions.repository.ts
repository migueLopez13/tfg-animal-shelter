import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Adoption } from "src/app/common/interfaces/adoption.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class AdoptionsRepository extends BaseRepository<Adoption>{
  constructor(private readonly http: HttpClient) {
    super(http, 'adoptions')
  }
}