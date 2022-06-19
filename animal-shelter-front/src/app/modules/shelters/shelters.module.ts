import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheltersRouting } from './shelters-routing.module';
import { ShelterCardComponent } from './components/shelter-card/shelter-card.component';
import { AllSheltersViewComponent } from './views/all-shelters-view/all-shelters-view.component';
import { ShelterViewComponent } from './views/shelter-view/shelter-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [

    ShelterCardComponent,
    AllSheltersViewComponent,
    ShelterViewComponent
  ],
  imports: [
    CommonModule,
    SheltersRouting,
    FontAwesomeModule
  ]
})
export class SheltersModule { }
