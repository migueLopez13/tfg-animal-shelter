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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
