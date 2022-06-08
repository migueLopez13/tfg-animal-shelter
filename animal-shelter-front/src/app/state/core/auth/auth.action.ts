import { createAction, props } from '@ngrx/store';
import { ILogin } from 'src/app/shared/domain/interfaces/login.interface';
import { User } from 'src/app/shared/domain/interfaces/user.interface';

export const AuthActions = {

  checkUserRequest: createAction(
    '[Auth check] Request',
  ),

  checkUserSuccess: createAction(
    '[Auth check] Success',
    props<{
      user: User;
    }>()
  ),

  checkUserFailure: createAction(
    '[Auth check] Failure',
    props<{
      error: string;
    }>()
  ),

  logoutRequest: createAction(
    '[Auth logout] Request',
  ),

  logoutSuccess: createAction(
    '[Auth logout] Success',
  ),
}