import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html'
})
export class UserAvatarComponent {
  hasImage = false
  userProfile = null

  constructor(private readonly router: Router) { }

  toRoute(route: string) {
    this.router.navigateByUrl(route)
  }

}
