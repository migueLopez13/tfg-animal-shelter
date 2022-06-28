import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { UserPhone } from 'src/app/shared/domain/interfaces/user-phone.interface';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { ProfileActions } from 'src/app/state/core/profile/profile.action';
import { ProfileSelectors } from 'src/app/state/core/profile/profile.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';
import { Section } from '../base-section/section.component';

@Component({
  selector: 'app-profile-phone',
  templateUrl: './profile-phone.component.html'
})
export class ProfilePhoneComponent extends Section implements OnInit {

  phones!: Observable<Readonly<UserPhone[]>>
  email!: string

  constructor(private readonly state: Store<AppState>) {
    super()
  }

  ngOnInit(): void {
    this.state.select(ProfileSelectors.selectCurrentUser)
      .pipe(map((user) => user.email))
      .subscribe((email) => {
        this.email = email
      })
    this.phones = this.state.select(ProfileSelectors.selectUserPhones)
  }

  override addElement(phone: UserPhone): void {
    phone.userEmail = this.email
    this.state.dispatch(ProfileActions.addPhoneRequest({ phone }))
    this.state.dispatch(ProfileActions.checkUserRequest())
    this.closeModal()
  }

  override editElement(phone: UserPhone): void {
    this.state.dispatch(ProfileActions.updatePhoneRequest(
      { phoneId: phone.id, phone }
    ))
    this.closeModal()
  }

  override removeElement(idPhone: any): void {
    this.state.dispatch(ProfileActions.deletePhoneRequest({ idPhone }))
    this.closeConfirmation()
  }
}
