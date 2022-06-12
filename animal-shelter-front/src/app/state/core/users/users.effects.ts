import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';


@Injectable()
export class UsersEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly usersService: UsersService

  ) { }

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Users load] Request'),
      switchMap(() =>
        this.usersService.findAll().pipe(
          map((users) => ({
            type: '[Users load] Success',
            users,
          })),
          catchError((error) =>
            of({
              type: '[Users load] Failure',
              error,
            })
          )
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User load] Request'),
      switchMap(({ userEmail }) =>
        this.usersService.find(userEmail).pipe(
          map((user) => ({
            type: '[User load] Success',
            user,
          })),
          catchError((error) =>
            of({
              type: '[User load] Failure',
              error,
            })
          )
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User add] Request'),
      switchMap(({ user }) =>
        this.usersService.add(user).pipe(
          map((user) => ({
            type: '[User add] Success',
            user,
          })),
          catchError((error) =>
            of({
              type: '[User add] Failure',
              error,
            })
          )
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User update] Request'),
      switchMap(({ userEmail, User }) =>
        this.usersService.update(userEmail, User).pipe(
          map((user) => ({
            type: '[User update] Success',
            user,
          })),
          catchError((error) =>
            of({
              type: '[User update] Failure',
              error,
            })
          )
        )
      )
    )
  );

  updateUserAvatar$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User updateAvatar] Request'),
      switchMap(({ file }) =>
        this.usersService.updateAvatar(file).pipe(
          map((user) => ({
            type: '[User updateAvatar] Success',
            user,
          })),
          catchError((error) =>
            of({
              type: '[User updateAvatar] Failure',
              error,
            })
          )
        )
      )
    )
  );

  removeUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User remove] Request'),
      switchMap(({ userEmail }) =>
        this.usersService.remove(userEmail).pipe(
          map((user) => ({
            type: '[User remove] Success',
            user,
          })),
          catchError((error) =>
            of({
              type: '[User remove] Failure',
              error,
            })
          )
        )
      )
    )
  );

  addUserAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[UserAddress add] Request'),
      switchMap(({ address }) =>
        this.usersService.addAddress(address).pipe(
          map((address) => ({
            type: '[UserAddress add] Success',
            address,
          })),
          catchError((error) =>
            of({
              type: '[UserAddress add] Failure',
              error,
            })
          )
        )
      )
    )
  );

  updateUserAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[UserAddress update] Request'),
      switchMap(({ addressId, address }) =>
        this.usersService.updateAddress(addressId, address).pipe(
          map((address) => ({
            type: '[UserAddress update] Success',
            address,
          })),
          catchError((error) =>
            of({
              type: '[UserAddress update] Failure',
              error,
            })
          )
        )
      )
    )
  );

  removeUserAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[UserAddress remove] Request'),
      switchMap(({ addressId }) =>
        this.usersService.removeAddress(addressId).pipe(
          map((address) => ({
            type: '[UserAddress remove] Success',
            address,
          })),
          catchError((error) =>
            of({
              type: '[UserAddress remove] Failure',
              error,
            })
          )
        )
      )
    )
  );

  addUserSocial$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[UserSocial add] Request'),
      switchMap(({ social }) =>
        this.usersService.addSocial(social).pipe(
          map((social) => ({
            type: '[UserSocial add] Success',
            social,
          })),
          catchError((error) =>
            of({
              type: '[UserSocial add] Failure',
              error,
            })
          )
        )
      )
    )
  );

  updateUserSocial$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[UserSocial update] Request'),
      switchMap(({ socialId, social }) =>
        this.usersService.updateSocial(socialId, social).pipe(
          map((social) => ({
            type: '[UserSocial update] Success',
            social,
          })),
          catchError((error) =>
            of({
              type: '[UserSocial update] Failure',
              error,
            })
          )
        )
      )
    )
  );

  removeUserSocial$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[UserSocial remove] Request'),
      switchMap(({ socialId }) =>
        this.usersService.removeSocial(socialId).pipe(
          map((social) => ({
            type: '[UserSocial remove] Success',
            social,
          })),
          catchError((error) =>
            of({
              type: '[UserSocial remove] Failure',
              error,
            })
          )
        )
      )
    )
  );

  addUserPhone$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[UserPhone add] Request'),
      switchMap(({ phone }) =>
        this.usersService.addPhone(phone).pipe(
          map((phone) => ({
            type: '[UserPhone add] Success',
            phone,
          })),
          catchError((error) =>
            of({
              type: '[UserPhone add] Failure',
              error,
            })
          )
        )
      )
    )
  );

  updateUserPhone$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[UserPhone update] Request'),
      switchMap(({ phoneId, phone }) =>
        this.usersService.updatePhone(phoneId, phone).pipe(
          map((Phone) => ({
            type: '[UserPhone update] Success',
            phone,
          })),
          catchError((error) =>
            of({
              type: '[UserPhone update] Failure',
              error,
            })
          )
        )
      )
    )
  );

  removeUserPhone$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[UserPhone remove] Request'),
      switchMap(({ phoneId }) => {
        return this.usersService.removePhone(phoneId).pipe(
          map((phone) => ({
            type: '[UserPhone remove] Success',
            phone,
          })),
          catchError((error) =>
            of({
              type: '[UserPhone remove] Failure',
              error,
            })
          )
        )
      }
      )
    )
  );
}