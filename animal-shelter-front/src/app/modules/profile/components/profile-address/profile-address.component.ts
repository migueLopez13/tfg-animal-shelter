import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserAddress } from 'src/app/shared/domain/interfaces/user-address.interface';
import { ProfileSelectors } from 'src/app/state/core/profile/profile.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';
import { Section } from '../base-section/section.component';

@Component({
  selector: 'app-profile-address',
  templateUrl: './profile-address.component.html',
})
export class ProfileAddressComponent extends Section {

  user = this.state.select(ProfileSelectors.selectCurrentUser)

  constructor(private readonly state: Store<AppState>) {
    super()
  }

}