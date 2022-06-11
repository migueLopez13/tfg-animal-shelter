import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/shared/domain/interfaces/user.interface";
import { BaseRepository } from "./base.repository";

@Injectable({
  providedIn: 'root',
})
export class UsersRepository extends BaseRepository<User>{
  constructor(private readonly http: HttpClient) {
    super(http, 'users')
  }

  updateAvatar(file: File) {
    return this.http.put(`${this.baseUrl}/avatar`, file)
  }
}