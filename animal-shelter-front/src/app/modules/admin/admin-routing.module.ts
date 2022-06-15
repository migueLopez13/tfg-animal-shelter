import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InConstructionComponent } from 'src/app/shared/components/in-construction/in-construction.component';
import { AdoptionsComponent } from './views/adoptions/adoptions.component';
import { AnimalsComponent } from './views/animals/animals.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SheltersComponent } from './views/shelters/shelters.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Dashboard',
    },
    component: DashboardComponent
  },
  {
    path: 'animals',
    data: {
      breadcrumb: 'Animals',
    },
    component: AnimalsComponent
  },
  {
    path: 'shelters',
    data: {
      breadcrumb: 'Shelters',
    },
    component: SheltersComponent
  },
  {
    path: 'users',
    data: {
      breadcrumb: 'Users',
    },
    component: UsersComponent
  },
  {
    path: 'adoptions',
    data: {
      breadcrumb: 'Adoptions',
    },
    component: AdoptionsComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRouting { }