import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthSelectors } from 'src/app/state/core/auth/auth.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private readonly store: Store<AppState>
  ) {
  }

  canActivate() {
    const token = localStorage.getItem('access_token')

    if (!token) {
      this.router.navigateByUrl('login');
      return false;
    }

    let isAdmin = false

    this.store.select(AuthSelectors.selectCurrentUser).subscribe((user) => {
      isAdmin = user?.role.some((role) => role.name === 'admin') as boolean
    })

    if (isAdmin) {
      return true
    } else {
      this.router.navigateByUrl('home');
      return false;
    }

  }
}