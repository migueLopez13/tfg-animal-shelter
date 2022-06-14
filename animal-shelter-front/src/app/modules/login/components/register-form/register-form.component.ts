import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IRegister } from 'src/app/shared/domain/interfaces/register.interface';
import { Role } from 'src/app/shared/domain/interfaces/role.interface';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {

  @Output() back = new EventEmitter()

  registerForm!: FormGroup
  name!: FormControl
  surname!: FormControl
  email!: FormControl
  password!: FormControl
  repassword!: FormControl

  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService
  ) { }

  ngOnInit(): void {
    this.createValidators()
    this.registerForm = this.fb.group(
      {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        repassword: this.repassword,
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

    this.repassword = new FormControl(
      '', [Validators.required, Validators.min(8)]
    );
  }

  register(user: IRegister) {
    if (this.checkPassword()) {
      const userToRegister: User = {
        name: user.name,
        surname: user.surname,
        password: user.password,
        email: user.email,
        avatar: '../../../../assets/default-user.png',
        role: [{
          id: 2,
          name: 'user'
        }]
      }
      this.auth.register(userToRegister)
    }
  }
  goBack() {
    this.back.emit()
  }

  checkPassword(): boolean {
    const pass = this.registerForm.get('password')?.value
    const repass = this.registerForm.get('repassword')?.value
    return pass === repass
  }
}

