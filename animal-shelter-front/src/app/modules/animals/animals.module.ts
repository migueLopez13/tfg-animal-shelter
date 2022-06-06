import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsRouting } from './animals-routing.module';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { BirdsComponent } from './views/birds/birds.component';
import { CatsComponent } from './views/cats/cats.component';
import { DogsComponent } from './views/dogs/dogs.component';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';



@NgModule({
  declarations: [
    CardComponent,
    BirdsComponent,
    CatsComponent,
    DogsComponent,
    CardWrapperComponent
  ],
  imports: [
    CommonModule,
    AnimalsRouting
  ]
})
export class AnimalsModule { }
