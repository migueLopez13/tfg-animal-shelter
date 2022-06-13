import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InConstructionComponent } from 'src/app/shared/components/in-construction/in-construction.component';
import { AnimalViewComponent } from './views/animal-view/animal-view.component';
import { BirdsComponent } from './views/birds/birds.component';
import { CatsComponent } from './views/cats/cats.component';
import { DogsComponent } from './views/dogs/dogs.component';

const routes: Routes = [
  {
    path: 'dogs',
    data: {
      breadcrumb: 'dogs',
    },
    component: DogsComponent
  },
  {
    path: 'cats',
    data: {
      breadcrumb: 'cats',
    },
    component: CatsComponent
  },
  {
    path: 'birds',
    data: {
      breadcrumb: 'birds',
    },
    component: BirdsComponent
  },
  {
    path: ':id',
    data: {
      breadcrumb: 'show/:id',
    },
    component: AnimalViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRouting { }