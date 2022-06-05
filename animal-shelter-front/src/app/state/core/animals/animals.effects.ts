import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AnimalsService } from 'src/app/shared/services/animals.service';

@Injectable()
export class AnimalsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly animalsService: AnimalsService
  ) { }

  loadAnimals$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Animals load] Request'),
      switchMap(() =>
        this.animalsService.findAll().pipe(
          map((animals) => ({
            type: '[Animals load] Success',
            animals,
          })),
          catchError((error) =>
            of({
              type: '[Animals load] Failure',
              error,
            })
          )
        )
      )
    )
  );

  loadAnimal$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Animal load] Request'),
      switchMap(({ animalId }) =>
        this.animalsService.find(animalId).pipe(
          map((animal) => ({
            type: '[Animal load] Success',
            animal,
          })),
          catchError((error) =>
            of({
              type: '[Animal load] Failure',
              error,
            })
          )
        )
      )
    )
  );

  addAnimal$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Animal add] Request'),
      switchMap(({ animal }) =>
        this.animalsService.add(animal).pipe(
          map((animal) => ({
            type: '[Animal add] Success',
            animal,
          })),
          catchError((error) =>
            of({
              type: '[Animal add] Failure',
              error,
            })
          )
        )
      )
    )
  );

  updateAnimal$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Animal update] Request'),
      switchMap(({ animalId, animal }) =>
        this.animalsService.update(animalId, animal).pipe(
          map((animal) => ({
            type: '[Animal update] Success',
            animal,
          })),
          catchError((error) =>
            of({
              type: '[Animal update] Failure',
              error,
            })
          )
        )
      )
    )
  );

  removeAnimal$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Animal remove] Request'),
      switchMap(({ animalId }) =>
        this.animalsService.remove(animalId).pipe(
          map((animal) => ({
            type: '[Animal remove] Success',
            animal,
          })),
          catchError((error) =>
            of({
              type: '[Animal remove] Failure',
              error,
            })
          )
        )
      )
    )
  );

  addAnimalMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[AnimalMedia add] Request'),
      switchMap(({ media }) =>
        this.animalsService.addMedia(media).pipe(
          map((media) => ({
            type: '[AnimalMedia add] Success',
            media,
          })),
          catchError((error) =>
            of({
              type: '[AnimalMedia add] Failure',
              error,
            })
          )
        )
      )
    )
  );

  updateAnimalMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[AnimalMedia update] Request'),
      switchMap(({ mediaId, media }) =>
        this.animalsService.updateMedia(mediaId, media).pipe(
          map((media) => ({
            type: '[AnimalMedia update] Success',
            media,
          })),
          catchError((error) =>
            of({
              type: '[AnimalMedia update] Failure',
              error,
            })
          )
        )
      )
    )
  );

  removeAnimalMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[AnimalMedia remove] Request'),
      switchMap(({ mediaId }) =>
        this.animalsService.remove(mediaId).pipe(
          map((media) => ({
            type: '[AnimalMedia remove] Success',
            media,
          })),
          catchError((error) =>
            of({
              type: '[AnimalMedia remove] Failure',
              error,
            })
          )
        )
      )
    )
  );
}