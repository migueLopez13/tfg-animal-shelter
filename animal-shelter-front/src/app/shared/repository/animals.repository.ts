import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Animal } from "src/app/common/interfaces/animal.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class AnimalsRepository extends BaseRepository<Animal>{
  constructor(private readonly http: HttpClient) {
    super(http, 'animals')
  }
}