import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting } from './home-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    CarouselComponent,
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    HomeRouting,
    FontAwesomeModule
  ]
})
export class HomeModule { }
