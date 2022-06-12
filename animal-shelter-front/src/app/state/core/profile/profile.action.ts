import { createAction, props } from '@ngrx/store';
import { UserPhone } from 'src/app/shared/domain/interfaces/user-phone.interface';
import { User } from 'src/app/shared/domain/interfaces/user.interface';

export const ProfileActions = {

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