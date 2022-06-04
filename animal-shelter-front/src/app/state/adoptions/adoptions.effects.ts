import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AdoptionsService } from 'src/app/shared/services/adoptions.service';

@Injectable()
export class AdoptionsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly adoptionsService: AdoptionsService
  ) { }

  loadAdoptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Adoptions load] Request'),
      switchMap(() =>
        this.adoptionsService.findAll().pipe(
          map((adoptions) => ({
            type: '[Adoptions load] Success',
            adoptions,
          })),
          catchError((error) =>
            of({
              type: '[Adoptions load] Failure',
              error,
            })
          )
        )
      )
    )
  );

  loadAdoption$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Adoption load] Request'),
      switchMap(({ adoptionId }) =>
        this.adoptionsService.find(adoptionId).pipe(
          map((adoption) => ({
            type: '[Adoption load] Success',
            adoption,
          })),
          catchError((error) =>
            of({
              type: '[Adoption load] Failure',
              error,
            })
          )
        )
      )
    )
  );

  addAdoption$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Adoption add] Request'),
      switchMap(({ adoption }) =>
        this.adoptionsService.add(adoption).pipe(
          map((adoption) => ({
            type: '[Adoption add] Success',
            adoption,
          })),
          catchError((error) =>
            of({
              type: '[Adoption add] Failure',
              error,
            })
          )
        )
      )
    )
  );

  removeAdoption$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Adoption remove] Request'),
      switchMap(({ adoptionId }) =>
        this.adoptionsService.remove(adoptionId).pipe(
          map((adoption) => ({
            type: '[Adoption remove] Success',
            adoption,
          })),
          catchError((error) =>
            of({
              type: '[Adoption remove] Failure',
              error,
            })
          )
        )
      )
    )
  );
}