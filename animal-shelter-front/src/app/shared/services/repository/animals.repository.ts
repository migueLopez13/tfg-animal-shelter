import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Animal } from "src/app/shared/domain/interfaces/animal.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class AnimalsRepository extends BaseRepository<Animal>{
  constructor(private readonly http: HttpClient) {
    super(http, 'animals')
  }

  getAnimalsByBKind(kind: string) {
    return this.http.get(`${this.baseUrl}/kind/${kind}`)
  }
}