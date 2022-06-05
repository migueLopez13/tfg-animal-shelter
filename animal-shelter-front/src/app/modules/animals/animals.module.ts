import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsComponent } from './animals.component';
import { AnimalsRouting } from './animals-routing.module';



@NgModule({
  declarations: [
    AnimalsComponent
  ],
  imports: [
    CommonModule,
    AnimalsRouting
  ]
})
export class AnimalsModule { }
