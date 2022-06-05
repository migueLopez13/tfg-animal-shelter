import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InConstructionComponent } from 'src/app/shared/components/in-construction/in-construction.component';

const routes: Routes = [
  {
    path: 'cats',
    data: {
      breadcrumb: 'Cats',
    },
    component: InConstructionComponent
  },
  {
    path: 'dogs',
    data: {
      breadcrumb: 'Dogs',
    },
    component: InConstructionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRouting { }