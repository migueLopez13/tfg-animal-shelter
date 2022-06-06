import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/interfaces/user.interface';
@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html'
})
export class UserAvatarComponent {

  userProfile!: User

  constructor(private readonly router: Router) { }

  toRoute(route: string) {
    this.router.navigateByUrl(route)
  }

}
