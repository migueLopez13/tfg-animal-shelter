import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InConstructionComponent } from 'src/app/shared/components/in-construction/in-construction.component';

const routes: Routes = [
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Dashboard',
    },
    component: InConstructionComponent
  },
  {
    path: 'animals',
    data: {
      breadcrumb: 'Animals',
    },
    component: InConstructionComponent
  },
  {
    path: 'shelters',
    data: {
      breadcrumb: 'Shelters',
    },
    component: InConstructionComponent
  },
  {
    path: 'users',
    data: {
      breadcrumb: 'Users',
    },
    component: InConstructionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRouting { }