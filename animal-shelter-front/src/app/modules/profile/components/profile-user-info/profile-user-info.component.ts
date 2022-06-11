import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/domain/interfaces/user.interface';

@Component({
  selector: 'app-profile-user-info',
  templateUrl: './profile-user-info.component.html'
})
export class ProfileUserInfoComponent implements OnInit {

  @Input() profile!: User
  @Output() save = new EventEmitter()

  profileForm!: FormGroup
  name!: FormControl
  surname!: FormControl
  email!: FormControl

  constructor(private readonly fb: FormBuilder,) { }

  ngOnInit(): void {
    this.createValidators()
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
    this.profileForm.setValue(this.profile)
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


  deleteUser() { }
  saveProfile() { }
  changePassword() { }
}
