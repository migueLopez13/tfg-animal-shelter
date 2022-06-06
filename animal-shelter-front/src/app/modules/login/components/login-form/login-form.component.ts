import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup
  email!: FormControl
  password!: FormControl

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.createValidators()
    this.loginForm = this.fb.group(
      {
        email: this.email,
        password: this.password
      }
    )
  }

  createValidators() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.min(8)]);
  }

  login(data: any) {
    console.log('login', data)
    //TODO
  }

  goBack() {
    //TODO
  }
}
