import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManteinanceComponent } from './shared/components/manteinance/manteinance.component';

const routes: Routes = [
  {
    path: '',
    component: ManteinanceComponent
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
