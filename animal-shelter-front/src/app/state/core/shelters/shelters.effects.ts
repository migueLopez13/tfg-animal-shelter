import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SheltersService } from 'src/app/shared/services/shelters.service';

@Injectable()
export class SheltersEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly sheltersService: SheltersService
  ) { }

  loadShelters$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Shelters load] Request'),
      switchMap(() =>
        this.sheltersService.findAll().pipe(
          map((shelters) => ({
            type: '[Shelters load] Success',
            shelters,
          })),
          catchError((error) =>
            of({
              type: '[Shelters load] Failure',
              error,
            })
          )
        )
      )
    )
  );

  loadShelter$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Shelter load] Request'),
      switchMap(({ shelterEmail }) =>
        this.sheltersService.find(shelterEmail).pipe(
          map((shelter) => ({
            type: '[Shelter load] Success',
            shelter,
          })),
          catchError((error) =>
            of({
              type: '[Shelter load] Failure',
              error,
            })
          )
        )
      )
    )
  );

  addShelter$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Shelter add] Request'),
      switchMap(({ shelter }) =>
        this.sheltersService.add(shelter).pipe(
          map((shelter) => ({
            type: '[Shelter add] Success',
            shelter,
          })),
          catchError((error) =>
            of({
              type: '[Shelter add] Failure',
              error,
            })
          )
        )
      )
    )
  );

  updateShelter$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Shelter update] Request'),
      switchMap(({ shelterEmail, Shelter }) =>
        this.sheltersService.update(shelterEmail, Shelter).pipe(
          map((shelter) => ({
            type: '[Shelter update] Success',
            shelter,
          })),
          catchError((error) =>
            of({
              type: '[Shelter update] Failure',
              error,
            })
          )
        )
      )
    )
  );

  removeShelter$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Shelter remove] Request'),
      switchMap(({ shelterEmail }) =>
        this.sheltersService.remove(shelterEmail).pipe(
          map((shelter) => ({
            type: '[Shelter remove] Success',
            shelter,
          })),
          catchError((error) =>
            of({
              type: '[Shelter remove] Failure',
              error,
            })
          )
        )
      )
    )
  );

  addShelterMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[ShelterMedia add] Request'),
      switchMap(({ media }) =>
        this.sheltersService.addMedia(media).pipe(
          map((media) => ({
            type: '[ShelterMedia add] Success',
            media,
          })),
          catchError((error) =>
            of({
              type: '[ShelterMedia add] Failure',
              error,
            })
          )
        )
      )
    )
  );

  updateShelterMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[ShelterMedia update] Request'),
      switchMap(({ mediaId, media }) =>
        this.sheltersService.updateMedia(mediaId, media).pipe(
          map((media) => ({
            type: '[ShelterMedia update] Success',
            media,
          })),
          catchError((error) =>
            of({
              type: '[ShelterMedia update] Failure',
              error,
            })
          )
        )
      )
    )
  );

  removeShelterMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[ShelterMedia remove] Request'),
      switchMap(({ mediaId }) =>
        this.sheltersService.remove(mediaId).pipe(
          map((media) => ({
            type: '[ShelterMedia remove] Success',
            media,
          })),
          catchError((error) =>
            of({
              type: '[ShelterMedia remove] Failure',
              error,
            })
          )
        )
      )
    )
  );

  addShelterSocial$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[ShelterSocial add] Request'),
      switchMap(({ social }) =>
        this.sheltersService.addSocial(social).pipe(
          map((social) => ({
            type: '[ShelterSocial add] Success',
            social,
          })),
          catchError((error) =>
            of({
              type: '[ShelterSocial add] Failure',
              error,
            })
          )
        )
      )
    )
  );

  updateShelterSocial$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[ShelterSocial update] Request'),
      switchMap(({ socialId, social }) =>
        this.sheltersService.updateSocial(socialId, social).pipe(
          map((social) => ({
            type: '[ShelterSocial update] Success',
            social,
          })),
          catchError((error) =>
            of({
              type: '[ShelterSocial update] Failure',
              error,
            })
          )
        )
      )
    )
  );

  removeShelterSocial$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[ShelterSocial remove] Request'),
      switchMap(({ socialId }) =>
        this.sheltersService.remove(socialId).pipe(
          map((social) => ({
            type: '[ShelterSocial remove] Success',
            social,
          })),
          catchError((error) =>
            of({
              type: '[ShelterSocial remove] Failure',
              error,
            })
          )
        )
      )
    )
  );
}