import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_EFFECTS, ROOT_REDUCERS } from './app.state';
import { AppState } from './interfaces/app.state.interface';
import { AdoptionsActions } from './adoptions/adoptions.actions';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AnimalsActions } from './animals/animals.action';



@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(ROOT_EFFECTS),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store<AppState>) => {
        return () => {
          store.dispatch(AnimalsActions.loadAnimalsRequest());
          /* store.dispatch(SheltersActions.loadSheltersRequest()); */
        };
      },
      multi: true,
      deps: [Store],
    },
  ],
})
export class StateModule { }
