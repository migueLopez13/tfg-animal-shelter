import { Component, OnInit } from "@angular/core"
import { Store } from "@ngrx/store"
import { Observable, map } from "rxjs"
import { AnimalData } from "src/app/shared/domain/interfaces/card-data.interface"
import { AnimalsActions } from "src/app/state/core/animals/animals.actions"
import { AnimalsSelectors } from "src/app/state/core/animals/animals.selectors"
import { AppState } from "src/app/state/interfaces/app.state.interface"

@Component({
  selector: 'app-base',
  template: `base-view`,
})
export class BaseAnimalView implements OnInit {
  animalKind: String
  animals!: Observable<AnimalData[]>
  animalsFiltered!: Observable<AnimalData[]>

  constructor(
    private readonly animalsStore: Store<AppState>,
    private readonly kind: String
  ) {
    this.animalKind = this.kind
  }

  ngOnInit(): void {

    this.animalsStore
      .dispatch(
        AnimalsActions.loadAnimalsByKindRequest({ kind: this.animalKind as string })
      )

    this.fillAnimalsCards()
    this.animalsFiltered = this.animals
  }

  fillAnimalsCards() {
    this.animals = this.animalsStore.select(AnimalsSelectors.selectAnimals)
      .pipe(map((animals) => {
        return animals.filter(({ kind }) => kind === this.animalKind)
      }))
      .pipe(map((_animals) => {
        return _animals.map((animal) => {
          let image = '../../../assets/default-animal.png'

          if (animal.media) {
            image = `${animal.media[0].url}`
          }

          return {
            image,
            name: animal.name,
            description: animal.description,
            kind: animal.kind,
            breed: animal.breed,
            route: `animals/${animal.id}`
          } as AnimalData
        })
      })) as Observable<AnimalData[]>
  }

  changePagination(data: any) {
    this.animalsFiltered = data
  }

}