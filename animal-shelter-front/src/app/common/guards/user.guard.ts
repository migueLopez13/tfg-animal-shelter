import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private router: Router,
  ) {
  }

  canActivate() {
    const token = localStorage.getItem('access_token')

    if (!token) {
      this.router.navigateByUrl('login');
      return false;
    }

    return true;
  }
}