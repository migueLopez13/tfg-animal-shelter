import { Component, OnInit } from "@angular/core"
import { Store } from "@ngrx/store"
import { Observable, map } from "rxjs"
import { CardData } from "src/app/common/interfaces/card-data.interface"
import { AnimalsActions } from "src/app/state/core/animals/animals.action"
import { AnimalsSelectors } from "src/app/state/core/animals/animals.selectors"
import { AppState } from "src/app/state/interfaces/app.state.interface"

@Component({
  selector: 'app-base',
  template: `base-view`,
})
export class BaseAnimalView implements OnInit {
  animalKind: String
  animals!: Observable<CardData[]>

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
            image = `../../../assets/${animal.media[0].url}`
          }

          return {
            image,
            name: animal.name,
            description: animal.description,
            kind: animal.kind,
            breed: animal.breed,
            route: `animals/${animal.id}`
          } as CardData
        })
      })) as Observable<CardData[]>
  }

}