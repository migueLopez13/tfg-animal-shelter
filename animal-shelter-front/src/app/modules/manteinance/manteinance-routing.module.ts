import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManteinanceComponent } from './manteinance.component';

const routes: Routes = [{ path: '', component: ManteinanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManteinanceRouting {}
