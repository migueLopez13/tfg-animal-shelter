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
      ofType('[Adoptions load] request'),
      switchMap(() =>
        this.adoptionsService.findAll().pipe(
          map((adoptions) => ({
            type: '[Adoptions load] success',
            adoptions,
          })),
          catchError((error) =>
            of({
              type: '[Adoptions load] failure',
              error,
            })
          )
        )
      )
    )
  );

  loadAdoption$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Adoption load] request'),
      switchMap(({ adoptionId }) =>
        this.adoptionsService.find(adoptionId).pipe(
          map((adoption) => ({
            type: '[Adoption load] success',
            adoption,
          })),
          catchError((error) =>
            of({
              type: '[Adoption load] failure',
              error,
            })
          )
        )
      )
    )
  );

  addAdoption$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Adoption add] request'),
      switchMap(({ adoption }) =>
        this.adoptionsService.add(adoption).pipe(
          map((adoption) => ({
            type: '[Adoption add] success',
            adoption,
          })),
          catchError((error) =>
            of({
              type: '[Adoption add] failure',
              error,
            })
          )
        )
      )
    )
  );

  removeAdoption$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Adoption remove] request'),
      switchMap(({ adoptionId }) =>
        this.adoptionsService.remove(adoptionId).pipe(
          map((adoption) => ({
            type: '[Adoption remove] success',
            adoption,
          })),
          catchError((error) =>
            of({
              type: '[Adoption remove] failure',
              error,
            })
          )
        )
      )
    )
  );
}