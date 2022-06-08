import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ShelterSocial } from "src/app/shared/domain/interfaces/shelter-social.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class ShelterSocialRepository extends BaseRepository<ShelterSocial>{
  constructor(private readonly http: HttpClient) {
    super(http, 'shelter-social')
  }
}