import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdoptionsActions } from 'src/app/state/core/adoptions/adoptions.actions';
import { AdoptionsSelectors } from 'src/app/state/core/adoptions/adoptions.selectors';
import { AnimalsActions } from 'src/app/state/core/animals/animals.actions';
import { AnimalsSelectors } from 'src/app/state/core/animals/animals.selectors';
import { SheltersActions } from 'src/app/state/core/shelters/shelters.action';
import { SheltersSelectors } from 'src/app/state/core/shelters/shelters.selectors';
import { UsersActions } from 'src/app/state/core/users/users.action';
import { UsersSelectors } from 'src/app/state/core/users/users.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadStores()
  }

  loadStores() {
    this.store.dispatch(AnimalsActions.loadAnimalsRequest())
    this.store.dispatch(SheltersActions.loadSheltersRequest())
    this.store.dispatch(UsersActions.loadUsersRequest())
    this.store.dispatch(AdoptionsActions.loadAdoptionsRequest())
  }



}
