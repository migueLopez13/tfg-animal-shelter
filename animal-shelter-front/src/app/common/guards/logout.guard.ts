import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProfileActions } from 'src/app/state/core/profile/profile.action';
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
    this.store.dispatch(ProfileActions.logoutRequest())
    this.router.navigateByUrl('home')
    return false
  }
}