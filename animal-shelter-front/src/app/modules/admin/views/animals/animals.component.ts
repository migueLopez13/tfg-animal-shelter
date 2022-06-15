import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AnimalsActions } from 'src/app/state/core/animals/animals.actions';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent implements OnInit {

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(AnimalsActions.loadAnimalsRequest())
  }

}
