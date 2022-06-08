import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './common/guards/admin.guard';
import { LogoutGuard } from './common/guards/logout.guard';
import { UserGuard } from './common/guards/user.guard';
import { HomeComponent } from './modules/home/home.component';
import { InConstructionComponent } from './shared/components/in-construction/in-construction.component';


const routes: Routes = [
  {
    path: '',
    component: InConstructionComponent
  },
  {
    path: 'home',
    data: {
      breadcrumb: 'Home',
    },
    loadChildren: () =>
      import('./modules/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'animals',
    data: {
      breadcrumb: 'Animals',
    },
    loadChildren: () =>
      import('./modules/animals/animals.module').then(
        (m) => m.AnimalsModule
      ),
  },
  {
    path: 'shelters',
    data: {
      breadcrumb: 'Shelters',
    },
    loadChildren: () =>
      import('./modules/shelters/shelters.module').then(
        (m) => m.SheltersModule
      ),
  },
  {
    path: 'collaborate',
    data: {
      breadcrumb: 'Collaborate',
    },
    loadChildren: () =>
      import('./modules/collaborate/collaborate.module').then(
        (m) => m.CollaborateModule
      ),
  },
  {
    path: 'login',
    data: {
      breadcrumb: 'Login',
    },
    loadChildren: () =>
      import('./modules/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'admin',
    data: {
      breadcrumb: 'Admin',
    },
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  {
    path: 'profile',
    data: {
      breadcrumb: 'Profile',
    },
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./modules/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'logout',
    data: {
      breadcrumb: 'logout',
    },
    canActivate: [LogoutGuard],
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
