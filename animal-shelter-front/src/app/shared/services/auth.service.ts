import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { AuthActions } from "src/app/state/core/auth/auth.action"
import { AppState } from "src/app/state/interfaces/app.state.interface"
import { ILogin } from "../domain/interfaces/login.interface"
import { User } from "../domain/interfaces/user.interface"
import { AuthRepository } from "./repository/auth.repository"


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLogin = false

  constructor(
    private readonly repository: AuthRepository,
    private readonly route: Router,
    private readonly store: Store<AppState>
  ) { }

  async loginUser(login: ILogin) {
    this.repository.loginUser(login).subscribe(
      (token) => {
        localStorage.setItem('access_token', token.access_token)
        this.store.dispatch(AuthActions.checkUserRequest())
        this.route.navigateByUrl('profile')
      }
    )
  }

  register(user: User) {
    this.repository.register(user).subscribe(() => {
      this.loginUser({ email: user.email, password: user.password as string })
    })
  }

  logout() {
    localStorage.removeItem('access_token')
    this.store.dispatch(AuthActions.logoutRequest())
    this.route.navigateByUrl('login')
  }
}