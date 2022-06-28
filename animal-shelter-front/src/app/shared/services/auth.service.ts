import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { ProfileActions } from "src/app/state/core/profile/profile.action"
import { AppState } from "src/app/state/interfaces/app.state.interface"
import { changePasswordRequest } from "../domain/interfaces/change-password-request.interface"
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
      async (token) => {
        localStorage.setItem('access_token', token.access_token)
        this.store.dispatch(ProfileActions.checkUserRequest())
        this.route.navigateByUrl('home')
      }
    )
  }

  register(user: User) {
    this.repository.register(user).subscribe(() => {
      this.loginUser({ email: user.email, password: user.password as string })
    })
  }

  changePassword(email: string, passwords: changePasswordRequest) {
    return this.repository.changePassword(email, passwords)
  }

  logout() {
    localStorage.removeItem('access_token')
    this.store.dispatch(ProfileActions.logoutRequest())
    this.route.navigateByUrl('login')
  }
}