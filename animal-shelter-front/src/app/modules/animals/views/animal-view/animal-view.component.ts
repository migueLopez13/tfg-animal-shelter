import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/shared/domain/interfaces/animal.interface';
import { AnimalsActions } from 'src/app/state/core/animals/animals.actions';
import { AnimalsSelectors } from 'src/app/state/core/animals/animals.selectors';
import { AppState } from 'src/app/state/interfaces/app.state.interface';

@Component({
  selector: 'app-animal-view',
  templateUrl: './animal-view.component.html'
})
export class AnimalViewComponent implements OnInit {
  animal?: Observable<Animal>

  constructor(
    private readonly currentRoute: ActivatedRoute,
    private readonly state: Store<AppState>
  ) { }

  ngOnInit(): void {
    const id = this.currentRoute.snapshot.paramMap.get('id')

    this.state.dispatch(AnimalsActions.loadAnimalRequest({ animalId: id as string }))

    this.animal = this.state.select(AnimalsSelectors.selectAnimalById(parseInt(id as string))) as Observable<Animal>
  }
}
