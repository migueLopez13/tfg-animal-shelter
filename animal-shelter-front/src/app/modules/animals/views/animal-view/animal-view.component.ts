import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
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
  id!: number
  leftArrow = faArrowAltCircleLeft
  rightArrow = faArrowAltCircleRight

  constructor(
    private readonly currentRoute: ActivatedRoute,
    private readonly route: Router,
    private readonly state: Store<AppState>
  ) {
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    this.id = parseInt(this.currentRoute.snapshot.paramMap.get('id') as string)

    this.state.dispatch(AnimalsActions.loadAnimalRequest(
      { animalId: this.id.toString() }
    ))

    this.animal = this.state.select(AnimalsSelectors.selectAnimalById(this.id)) as Observable<Animal>
  }

  lastAnimal() {
    const lastId = this.id - 1
    this.route.navigateByUrl(`animals/${lastId}`)
  }

  nextAnimal() {
    const nextId = this.id + 1
    this.route.navigateByUrl(`animals/${nextId}`)
  }
}
