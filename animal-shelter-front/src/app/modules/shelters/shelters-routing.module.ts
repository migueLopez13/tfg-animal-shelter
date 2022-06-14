import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InConstructionComponent } from 'src/app/shared/components/in-construction/in-construction.component';
import { AllSheltersViewComponent } from './views/all-shelters-view/all-shelters-view.component';
import { ShelterViewComponent } from './views/shelter-view/shelter-view.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: '',
    },
    component: AllSheltersViewComponent
  },
  {
    path: ':id',
    data: {
      breadcrumb: '',
    },
    component: ShelterViewComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheltersRouting { }