import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsRouting } from './animals-routing.module';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { BirdsComponent } from './views/birds/birds.component';
import { CatsComponent } from './views/cats/cats.component';
import { DogsComponent } from './views/dogs/dogs.component';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { BaseAnimalView } from './views/base-animal-view/base-animal-view';
import { PaginationFilterComponent } from './components/pagination-filter/pagination-filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    CardComponent,
    BirdsComponent,
    CatsComponent,
    DogsComponent,
    CardWrapperComponent,
    BaseAnimalView,
    PaginationFilterComponent
  ],
  imports: [
    CommonModule,
    AnimalsRouting,
    FontAwesomeModule
  ]
})
export class AnimalsModule { }
