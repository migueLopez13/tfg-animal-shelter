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

  updateProfileRequest: createAction(
    '[Profile update] Request',
    props<{
      id: string,
      user: User;
    }>()
  ),

  updateProfileSuccess: createAction(
    '[Profile update] Success',
    props<{
      user: User;
    }>()
  ),

  updateProfileFailure: createAction(
    '[Profile update] Failure',
    props<{
      error: string;
    }>()
  ),

  updateAvatarRequest: createAction(
    '[Profile updateAvatar] Request',
    props<{
      avatar: string
    }>()
  ),

  updateAvatarSuccess: createAction(
    '[Profile updateAvatar] Success',
    props<{
      user: User;
    }>()
  ),

  updateAvatarFailure: createAction(
    '[Profile updateAvatar] Failure',
    props<{
      error: string;
    }>()
  ),

  addPhoneRequest: createAction(
    '[ProfilePhone add] Request',
    props<{
      phone: UserPhone;
    }>()
  ),


  addPhoneSuccess: createAction(
    '[ProfilePhone add] Success',
    props<{
      phone: UserPhone;
    }>()
  ),

  addPhoneFailure: createAction(
    '[ProfilePhone add] Failure',
    props<{
      error: string;
    }>()
  ),

  updatePhoneRequest: createAction(
    '[ProfilePhone update] Request',
    props<{
      phoneId: number,
      phone: UserPhone
    }>()
  ),

  updatePhoneSuccess: createAction(
    '[ProfilePhone update] Success',
    props<{
      phone: UserPhone;
    }>()
  ),

  updatePhoneFailure: createAction(
    '[ProfilePhone update] Failure',
    props<{
      error: string;
    }>()
  ),

  deletePhoneRequest: createAction(
    '[ProfilePhone remove] Request',
    props<{
      idPhone: number;
    }>()
  ),

  deletePhoneSuccess: createAction(
    '[ProfilePhone remove] Success',
    props<{
      idPhone: number;
    }>()
  ),

  deletePhoneFailure: createAction(
    '[ProfilePhone remove] Failure',
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