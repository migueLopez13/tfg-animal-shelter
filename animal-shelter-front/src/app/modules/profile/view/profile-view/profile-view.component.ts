import { Component, OnInit } from '@angular/core';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { State, Store } from '@ngrx/store';
import { UserPhone } from 'src/app/shared/domain/interfaces/user-phone.interface';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { ProfileActions } from 'src/app/state/core/profile/profile.action';
import { ProfileSelectors } from 'src/app/state/core/profile/profile.selectors';
import { UsersActions } from 'src/app/state/core/users/users.action';
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
    this.state.select(ProfileSelectors.selectCurrentUser).subscribe(
      (user) => {
        this.profile = user[0] as User
      }
    )
  }

  saveProfile(event: any) { }

  changeAvatar(event: any) { }

  newPhone(phone: UserPhone) {
    phone.userEmail = this.profile.email
    this.state.dispatch(UsersActions.addUserPhoneRequest({ phone }))
  }
  editPhone(phone: UserPhone) {
    this.state.dispatch(UsersActions.updateUserPhoneRequest(
      { phoneId: phone.id, phone }
    ))
  }
  deletePhone(id: number) {
    this.state.dispatch(UsersActions.removeUserPhoneRequest(
      { phoneId: id }
    ))
  }

  newAddress(event: any) { }
  editAddress(event: any) { }
  deleteAddress(event: any) { }

  newSocial(event: any) { }
  editSocial(event: any) { }
  deleteSocial(event: any) { }

}
