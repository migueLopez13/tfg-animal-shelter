import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AnimalMedia } from "src/app/common/interfaces/animal-media.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class AnimalMediaRepository extends BaseRepository<AnimalMedia>{
  constructor(private readonly http: HttpClient) {
    super(http, 'animal-media')
  }
}