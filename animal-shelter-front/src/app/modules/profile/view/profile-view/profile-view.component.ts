import { Component, OnInit } from '@angular/core';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
export class ProfileViewComponent {

  openIcon = faChevronCircleDown
  closeIcon = faChevronCircleUp

  constructor() { }
}
