import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InConstructionComponent } from 'src/app/shared/components/in-construction/in-construction.component';

const routes: Routes = [
  { path: '', component: InConstructionComponent },
  { path: 'animals', component: InConstructionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheltersRouting { }