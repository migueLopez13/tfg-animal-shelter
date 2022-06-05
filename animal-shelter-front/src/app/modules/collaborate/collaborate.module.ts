import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaborateComponent } from './collaborate.component';
import { CollaborateRouting } from './collaborate-routing.module';



@NgModule({
  declarations: [
    CollaborateComponent
  ],
  imports: [
    CommonModule,
    CollaborateRouting
  ]
})
export class CollaborateModule { }
