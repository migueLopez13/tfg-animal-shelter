import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { ProfileSelectors } from 'src/app/state/core/profile/profile.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html'
})
export class ProfileImageComponent implements OnInit {

  editIcon = faPencilAlt
  user!: User

  constructor(private readonly state: Store<AppState>) { }

  ngOnInit(): void {
    this.state.select(ProfileSelectors.selectCurrentUser).subscribe((user) => {
      this.user = user
    })
  }

  editImage() {
  }
}
