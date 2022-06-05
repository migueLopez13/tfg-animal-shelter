import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheltersComponent } from './shelters.component';
import { SheltersRouting } from './shelters-routing.module';



@NgModule({
  declarations: [
    SheltersComponent
  ],
  imports: [
    CommonModule,
    SheltersRouting
  ]
})
export class SheltersModule { }
