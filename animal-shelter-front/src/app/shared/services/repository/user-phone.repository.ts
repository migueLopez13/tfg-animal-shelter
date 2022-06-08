import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserPhone } from "src/app/shared/domain/interfaces/user-phone.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class UserPhoneRepository extends BaseRepository<UserPhone>{
  constructor(private readonly http: HttpClient) {
    super(http, 'user-phone')
  }
}