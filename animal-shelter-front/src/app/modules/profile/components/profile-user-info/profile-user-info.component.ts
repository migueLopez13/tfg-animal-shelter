import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { ProfileActions } from 'src/app/state/core/profile/profile.action';
import { ProfileSelectors } from 'src/app/state/core/profile/profile.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-profile-user-info',
  templateUrl: './profile-user-info.component.html'
})
export class ProfileUserInfoComponent implements OnInit {

  user!: User

  profileForm!: FormGroup
  name!: FormControl
  surname!: FormControl
  email!: FormControl
  showConfirmation = false

  constructor(
    private readonly fb: FormBuilder,
    private readonly state: Store<AppState>
  ) { }

  async ngOnInit(): Promise<void> {
    this.createValidators()
    this.setGroup()

    this.state.select(ProfileSelectors.selectCurrentUser).subscribe((user) => {
      this.user = user
      this.profileForm.setValue(user)
    })
  }

  createValidators() {
    this.name = new FormControl(
      '', [Validators.required, Validators.min(3)]
    );
    this.surname = new FormControl(
      '', [Validators.required, Validators.min(3)]
    );
    this.email = new FormControl(
      '', [Validators.required, Validators.email]
    );
  }

  setGroup() {
    this.profileForm = this.fb.group(
      {
        name: this.name,
        surname: this.surname,
        email: this.email,
        avatar: '',
        social: '',
        address: '',
        adoptions: '',
        phone: '',
        role: ''
      })
  }

  openConfirmation() {
    this.showConfirmation = true
  }

  closeConfirmation() {
    this.showConfirmation = false
  }

  deleteUser($even: string) {
    //TODO dispatch eliminar user y logout
    this.showConfirmation = false
  }

  saveProfile() {
    if (this.profileForm.valid) {
      this.state.dispatch(ProfileActions.updateProfileRequest({ id: this.user.email, user: this.profileForm.value }))
    }
  }

  changePassword() {
  }
}
