import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_EFFECTS, ROOT_REDUCERS } from './app.state';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(ROOT_EFFECTS),
  ],
  providers: [],
})
export class StateModule { }
