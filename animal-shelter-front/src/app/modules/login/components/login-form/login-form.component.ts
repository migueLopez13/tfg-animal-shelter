import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from 'src/app/shared/domain/interfaces/login.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {

  @Output() back = new EventEmitter()

  loginForm!: FormGroup
  email!: FormControl
  password!: FormControl

  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService
  ) { }

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

  login(login: ILogin) {
    this.auth.loginUser(login)
  }

  goBack() {
    this.back.emit()
  }
}
