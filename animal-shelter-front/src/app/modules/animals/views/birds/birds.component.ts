import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/interfaces/app.state.interface';
import { BaseAnimalView } from '../base-animal-view/base-animal-view';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html'
})
export class BirdsComponent extends BaseAnimalView {
  constructor(animalsStore: Store<AppState>,) {
    super(animalsStore, 'bird')
  }

}
