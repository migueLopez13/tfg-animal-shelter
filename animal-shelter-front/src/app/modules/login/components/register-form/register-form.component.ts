import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup
  name!: FormControl
  surname!: FormControl
  email!: FormControl
  password!: FormControl
  checkPassword!: FormControl

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.createValidators()
    this.registerForm = this.fb.group(
      {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        repassword: this.checkPassword
      }
    )
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

    this.password = new FormControl(
      '', [Validators.required, Validators.min(8)]
    );

    this.checkPassword = new FormControl(
      '', [Validators.required, Validators.min(8)]
    );
  }

  register(data: any) {
    console.log('register', data)
    //TODO
  }
  goBack() {
    //TODO
  }
}

