import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/state/interfaces/app.state.interface';
import { BaseAnimalView } from '../base-animal-view/base-animal-view';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html'
})
export class CatsComponent extends BaseAnimalView {

  constructor(animalsStore: Store<AppState>,) {
    super(animalsStore, 'cat')
  }
}
