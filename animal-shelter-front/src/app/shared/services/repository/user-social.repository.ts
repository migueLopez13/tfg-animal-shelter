import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserSocial } from "src/app/shared/domain/interfaces/user-social.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class UserSocialRepository extends BaseRepository<UserSocial>{
  constructor(private readonly http: HttpClient) {
    super(http, 'user-social')
  }
}