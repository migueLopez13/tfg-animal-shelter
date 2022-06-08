import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthActions } from 'src/app/state/core/auth/auth.action';
import { AuthSelectors } from 'src/app/state/core/auth/auth.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {

  constructor(
    private router: Router,
    private readonly store: Store<AppState>
  ) {
  }

  canActivate() {
    localStorage.removeItem('access_token')
    this.store.dispatch(AuthActions.logoutRequest())
    this.router.navigateByUrl('home')
    return false
  }
}