import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';

@Injectable()
export class AuthEffects {
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
          catchError((error) =>
            of({
              type: '[Auth check] Failure',
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
