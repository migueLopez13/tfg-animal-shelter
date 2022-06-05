import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InConstructionComponent } from './shared/components/in-construction/in-construction.component';


const routes: Routes = [
  {
    path: '',
    component: InConstructionComponent
    /* loadChildren: () =>
      import('./modules/manteinance/manteinance.module').then(
        (m) => m.ManteinanceModule
      ), */
  },
  {
    path: 'home',
    component: InConstructionComponent
  },
  {
    path: 'animals',
    component: InConstructionComponent
  },
  {
    path: 'shelters',
    component: InConstructionComponent
  },
  {
    path: 'collaborate',
    component: InConstructionComponent
  },
  {
    path: 'login',
    component: InConstructionComponent
  },
  {
    path: 'register',
    component: InConstructionComponent
  },
  {
    path: 'admin',
    component: InConstructionComponent
  },
  {
    path: 'profile',
    component: InConstructionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
