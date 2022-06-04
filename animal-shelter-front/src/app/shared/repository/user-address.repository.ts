import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserAddress } from "src/app/common/interfaces/user-address.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class UserAddressRepository extends BaseRepository<(UserAddress)>{
  constructor(private readonly http: HttpClient) {
    super(http, 'user-address')
  }
}