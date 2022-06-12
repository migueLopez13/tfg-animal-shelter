import { Component, OnInit } from '@angular/core';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { State, Store } from '@ngrx/store';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { AuthSelectors } from 'src/app/state/core/auth/auth.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
})
export class ProfileViewComponent implements OnInit {
  profile!: User
  openIcon = faChevronCircleDown
  closeIcon = faChevronCircleUp

  constructor(private readonly state: Store<AppState>) { }

  ngOnInit(): void {
    this.state.select(AuthSelectors.selectCurrentUser).subscribe(
      (user) => {
        this.profile = user as User
        console.log(user)
      }
    )
  }

  saveProfile(event: any) { }

  changeAvatar(event: any) { }

  newPhone(event: any) { }
  editPhone(event: any) { }
  deletePhone(event: any) { }

  newAddress(event: any) { }
  editAddress(event: any) { }
  deleteAddress(event: any) { }

  newSocial(event: any) { }
  editSocial(event: any) { }
  deleteSocial(event: any) { }

}
