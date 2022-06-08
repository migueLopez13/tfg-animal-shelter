import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ShelterMedia } from "src/app/shared/domain/interfaces/shelter-media.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class ShelterMediaRepository extends BaseRepository<ShelterMedia>{
  constructor(private readonly http: HttpClient) {
    super(http, 'shelter-media')
  }
}