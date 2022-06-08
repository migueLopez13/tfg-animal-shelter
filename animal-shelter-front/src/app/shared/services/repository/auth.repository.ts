import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ILogin } from "../../domain/interfaces/login.interface";
import { User } from "../../domain/interfaces/user.interface";

export interface IToken {
  'access_token': string
}

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  baseUrl = 'http://localhost:8000'

  constructor(protected _http: HttpClient) { }

  loginUser(login: ILogin): Observable<IToken> {
    return this._http.post<IToken>(`${this.baseUrl}/auth/login/user`, login);
  }

  loginShelter(login: ILogin): Observable<IToken> {
    return this._http.post<IToken>(`${this.baseUrl}/auth/login/shelter`, login);
  }

  register(user: User): Observable<User> {
    return this._http.post<User>(`${this.baseUrl}/users`, user);
  }


}