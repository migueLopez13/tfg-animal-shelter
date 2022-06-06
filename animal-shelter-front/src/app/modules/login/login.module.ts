import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRouting } from './login-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MatInputModule } from '@angular/material/input';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginViewComponent } from './views/login-view/login-view.component';




@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    UserFormComponent,
    LoginViewComponent
  ],
  imports: [
    CommonModule,
    LoginRouting,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class LoginModule { }
