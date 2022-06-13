import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserSocial } from 'src/app/shared/domain/interfaces/user-social.interface';
import { ProfileSelectors } from 'src/app/state/core/profile/profile.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';
import { Section } from '../base-section/section.component';

@Component({
  selector: 'app-profile-social',
  templateUrl: './profile-social.component.html'
})
export class ProfileSocialComponent extends Section {
  user = this.state.select(ProfileSelectors.selectCurrentUser)

  constructor(private readonly state: Store<AppState>) {
    super()
  }
}