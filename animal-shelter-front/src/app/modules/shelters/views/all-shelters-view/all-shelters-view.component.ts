import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Shelter } from 'src/app/shared/domain/interfaces/shelter.interface';
import { SheltersActions } from 'src/app/state/core/shelters/shelters.action';
import { SheltersSelectors } from 'src/app/state/core/shelters/shelters.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-all-shelters-view',
  templateUrl: './all-shelters-view.component.html'
})
export class AllSheltersViewComponent implements OnInit {

  shelters!: Observable<ReadonlyArray<Shelter>>

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(SheltersActions.loadSheltersRequest())
    this.shelters = this.store.select(SheltersSelectors.selectShelters)
  }

}
