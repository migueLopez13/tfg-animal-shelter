import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InConstructionComponent } from 'src/app/shared/components/in-construction/in-construction.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginViewComponent } from './views/login-view/login-view.component';

const routes: Routes = [
  { path: '', component: LoginViewComponent },
  { path: 'new-user', component: InConstructionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRouting { }