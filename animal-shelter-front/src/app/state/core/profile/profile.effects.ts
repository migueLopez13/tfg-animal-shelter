import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';

@Injectable()
export class ProfileEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly user: UsersService,
  ) { }

  checkUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Auth check] Request'),
      switchMap(() =>
        this.user.find('me').pipe(
          map((user) => ({
            type: '[Auth check] Success',
            user,
          })
          ),
          catchError((error) => {
            localStorage.removeItem('access_token')
            return of({
              type: '[Auth check] Failure',
              error,
            })
          }

          )
        )
      )
    )
  )

  updateProfileAvatar$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Profile updateAvatar] Request'),
      switchMap(({ avatar }) =>
        this.user.updateAvatar(avatar).pipe(
          map((user) => ({
            type: '[Profile updateAvatar] Success',
            user,
          })
          ),
          catchError((error) =>
            of({
              type: '[Profile updateAvatar] Failure',
              error,
            })
          )
        )
      )
    )
  )

  updateProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Profile update] Request'),
      switchMap(({ id, user }) =>
        this.user.update(id, user).pipe(
          map((response) => ({
            type: '[Profile update] Success',
            user,
          })
          ),
          catchError((error) =>
            of({
              type: '[Profile update] Failure',
              error,
            })
          )
        )
      )
    )
  )

  addPhoneUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[ProfilePhone add] Request'),
      switchMap(({ phone }) =>
        this.user.addPhone(phone).pipe(
          map((phone) => ({
            type: '[ProfilePhone add] Success',
            phone,
          })
          ),
          catchError((error) =>
            of({
              type: '[ProfilePhone add] Failure',
              error,
            })
          )
        )
      )
    )
  )

  updatePhoneUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[ProfilePhone update] Request'),
      switchMap(({ idPhone, phone }) =>
        this.user.updatePhone(idPhone, phone).pipe(
          map((_phone) => ({
            type: '[ProfilePhone update] Success',
            phone,
          })
          ),
          catchError((error) =>
            of({
              type: '[ProfilePhone update] Failure',
              error,
            })
          )
        )
      )
    )
  )

  deletePhoneUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[ProfilePhone remove] Request'),
      switchMap(({ idPhone }) =>
        this.user.removePhone(idPhone).pipe(
          map((phone) => ({
            type: '[ProfilePhone remove] Success',
            idPhone,
          })
          ),
          catchError((error) =>
            of({
              type: '[ProfilePhone remove] Failure',
              error,
            })
          )
        )
      )
    )
  )

  logoutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Auth logout] Request'),
      switchMap(() => {
        return of({
          type: '[Auth logout] Success',
        })
      })
    )
  )
}
