import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { AuthActions } from 'src/app/state/core/auth/auth.action';
import { AuthSelectors } from 'src/app/state/core/auth/auth.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';
import { NavbarOption } from '../../domain/interfaces/nabvar-option.interface';
@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html'
})
export class UserAvatarComponent implements OnInit {

  userProfile!: Readonly<User>
  userOptions: NavbarOption[] = [
    {
      name: 'Profile',
      route: 'profile'
    },
    {
      name: 'Logout',
      route: 'logout'
    }
  ]

  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(AuthSelectors.selectCurrentUser).subscribe((user) => {
      this.userProfile = user as Readonly<User>
      if (user?.role.some(({ name }) => name === 'admin')) {
        this.userOptions =
          [
            {
              name: 'Admin',
              route: 'admin'
            },
            {
              name: 'Profile',
              route: 'profile'
            },
            {
              name: 'Logout',
              route: 'logout'
            }
          ]
      }
    })
  }

  toRoute(route: string) {
    this.router.navigateByUrl(route)
  }

}
