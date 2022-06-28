import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/interfaces/app.state.interface';
import { BaseAnimalView } from '../base-animal-view/base-animal-view';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html'
})
export class DogsComponent extends BaseAnimalView {
  constructor(animalsStore: Store<AppState>,) {
    super(animalsStore, 'dog')
  }
}
