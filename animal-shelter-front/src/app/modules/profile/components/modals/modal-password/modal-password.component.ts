import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ProfileSelectors } from 'src/app/state/core/profile/profile.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';
import { AuthService } from '../../../../../shared/services/auth.service';

@Component({
  selector: 'app-modal-password',
  templateUrl: './modal-password.component.html'
})
export class ModalPasswordComponent implements OnInit {

  @Output() close = new EventEmitter()

  passwordForm!: FormGroup
  oldPassword!: FormControl
  newPassword!: FormControl
  reNewPAssword!: FormControl
  email!: string
  errorMessage!: string


  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(ProfileSelectors.selectCurrentUser).pipe(map((user) => user.email)).subscribe((email) => { this.email = email })
    this.setControls()
    this.passwordForm = this.fb.group(
      {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        reNewPassword: this.reNewPAssword,
      }
    )
  }

  setControls() {
    this.oldPassword = new FormControl(
      '', [Validators.required, Validators.min(3)]
    ); this.newPassword = new FormControl(
      '', [Validators.required, Validators.min(3)]
    );
    this.reNewPAssword = new FormControl(
      '', [Validators.required, Validators.min(3)]
    );
  }


  closeModal() {
    this.close.emit()
  }

  saveElement() {
    if (this.newPassword.value === this.reNewPAssword.value && this.passwordForm.valid) {
      this.auth.changePassword(this.email,
        {
          oldPassword: this.oldPassword.value,
          newPassword: this.newPassword.value
        }).subscribe((response) => {
          this.closeModal()
        })
    } else {
      this.errorMessage = 'Sorry passwords dont match.'
    }
  }
}
