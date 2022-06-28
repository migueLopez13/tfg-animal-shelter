import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SheltersActions } from 'src/app/state/core/shelters/shelters.action';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-shelters',
  templateUrl: './shelters.component.html'
})
export class SheltersComponent implements OnInit {

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(SheltersActions.loadSheltersRequest())
  }
}
