import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/common/interfaces/user.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class UsersRepository extends BaseRepository<User>{
  constructor(private readonly http: HttpClient) {
    super(http, 'users')
  }
}