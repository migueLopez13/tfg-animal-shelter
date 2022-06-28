import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { UserSocial } from 'src/app/shared/domain/interfaces/user-social.interface';
import { ProfileActions } from 'src/app/state/core/profile/profile.action';
import { ProfileSelectors } from 'src/app/state/core/profile/profile.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';
import { Section } from '../base-section/section.component';

@Component({
  selector: 'app-profile-social',
  templateUrl: './profile-social.component.html'
})
export class ProfileSocialComponent extends Section implements OnInit {
  socialNetworks!: Observable<Readonly<UserSocial[]>>
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
    this.socialNetworks = this.state.select(
      ProfileSelectors.selectUserSocialLinks
    )
  }


  override addElement(social: UserSocial): void {
    social.userEmail = this.email
    this.state.dispatch(ProfileActions.addSocialRequest({ social }))
    this.state.dispatch(ProfileActions.checkUserRequest())
    this.closeModal()
  }

  override editElement(social: UserSocial): void {
    this.state.dispatch(ProfileActions.updateSocialRequest(
      { socialId: social.id, social }
    ))
    this.closeModal()
  }

  override removeElement(idSocial: any): void {
    this.state.dispatch(ProfileActions.deleteSocialRequest({ idSocial }))
    this.closeConfirmation()
  }
}