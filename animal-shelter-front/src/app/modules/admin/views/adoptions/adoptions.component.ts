import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdoptionsActions } from 'src/app/state/core/adoptions/adoptions.actions';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html'
})
export class AdoptionsComponent implements OnInit {

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(AdoptionsActions.loadAdoptionsRequest())
  }

}
