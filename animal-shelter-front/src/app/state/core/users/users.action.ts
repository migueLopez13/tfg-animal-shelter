import { createAction, props } from '@ngrx/store';
import { UserAddress } from 'src/app/common/interfaces/user-address.interface';
import { UserPhone } from 'src/app/common/interfaces/user-phone.interface';
import { UserSocial } from 'src/app/common/interfaces/user-social.interface';
import { User } from 'src/app/common/interfaces/user.interface';


export const UsersActions = {

  loadUsersRequest: createAction(
    '[Users load] Request',
  ),

  loadUsersSuccess: createAction(
    '[Users load] Success',
    props<{
      users: User[];
    }>()
  ),

  loadUsersFailure: createAction(
    '[Users load] Failure',
    props<{
      error: string;
    }>()
  ),

  loadUserRequest: createAction(
    '[User load] Request',
    props<{
      userEmail: string;
    }>()
  ),

  loadUserSuccess: createAction(
    '[User load] Success',
    props<{
      user: User;
    }>()
  ),

  loadUserFailure: createAction(
    '[User load] Failure',
    props<{
      error: string;
    }>()
  ),


  addUserRequest: createAction(
    '[User add] Request',
    props<{ user: User }>()
  ),

  addUserSuccess: createAction(
    '[User add] Success',
    props<{ user: User }>()
  ),

  addUserFailure: createAction(
    '[User add] Failure',
    props<{ error: string }>()
  ),

  updateUserRequest: createAction(
    '[User update] Request',
    props<{ userEmail: string, user: User }>()
  ),

  updateUserSuccess: createAction(
    '[User update] Success',
    props<{ user: User }>()
  ),

  updateUserFailure: createAction(
    '[User update] Failure',
    props<{ error: string }>()
  ),

  removeUserRequest: createAction(
    '[User remove] Request',
    props<{ userEmail: string }>()
  ),

  removeUserSuccess: createAction(
    '[User remove] Success',
    props<{ user: User }>()
  ),

  removeUserFailure: createAction(
    '[User remove] Failure',
    props<{ error: string }>()
  ),

  addUserAddressRequest: createAction(
    '[UserAddress add] Request',
    props<{ address: UserAddress }>()
  ),

  addUserAddressSuccess: createAction(
    '[UserAddress add] Success',
    props<{ address: UserAddress }>()
  ),

  addUserAddressFailure: createAction(
    '[UserAddress add] Failure',
    props<{ error: string }>()
  ),

  updateUserAddressRequest: createAction(
    '[UserAddress update] Request',
    props<{ addressId: number, address: UserAddress }>()
  ),

  updateUserAddressSuccess: createAction(
    '[UserAddress update] Success',
    props<{ address: UserAddress }>()
  ),

  updateUserAddressFailure: createAction(
    '[UserAddress update] Failure',
    props<{ error: string }>()
  ),

  removeUserAddressRequest: createAction(
    '[UserAddress remove] Request',
    props<{ addressId: string }>()
  ),

  removeUserAddressSuccess: createAction(
    '[UserAddress remove] Success',
    props<{ address: UserAddress }>()
  ),

  removeUserAddressFailure: createAction(
    '[UserAddress remove] Failure',
    props<{ error: string }>()
  ),

  addUserSocialRequest: createAction(
    '[UserSocial add] Request',
    props<{ social: UserSocial }>()
  ),

  addUserSocialSuccess: createAction(
    '[UserSocial add] Success',
    props<{ social: UserSocial }>()
  ),

  addUserSocialFailure: createAction(
    '[UserSocial add] Failure',
    props<{ error: string }>()
  ),

  updateUserSocialRequest: createAction(
    '[UserSocial update] Request',
    props<{ socialId: number, Social: UserSocial }>()
  ),

  updateUserSocialSuccess: createAction(
    '[UserSocial update] Success',
    props<{ social: UserSocial }>()
  ),

  updateUserSocialFailure: createAction(
    '[UserSocial update] Failure',
    props<{ error: string }>()
  ),

  removeUserSocialRequest: createAction(
    '[UserSocial remove] Request',
    props<{ socialId: string }>()
  ),

  removeUserSocialSuccess: createAction(
    '[UserSocial remove] Success',
    props<{ social: UserSocial }>()
  ),

  removeUserSocialFailure: createAction(
    '[UserSocial remove] Failure',
    props<{ error: string }>()
  ),

  addUserPhoneRequest: createAction(
    '[UserPhone add] Request',
    props<{ phone: UserPhone }>()
  ),

  addUserPhoneSuccess: createAction(
    '[UserPhone add] Success',
    props<{ phone: UserPhone }>()
  ),

  addUserPhoneFailure: createAction(
    '[UserPhone add] Failure',
    props<{ error: string }>()
  ),

  updateUserPhoneRequest: createAction(
    '[UserPhone update] Request',
    props<{ phoneId: number, phone: UserPhone }>()
  ),

  updateUserPhoneSuccess: createAction(
    '[UserPhone update] Success',
    props<{ phone: UserPhone }>()
  ),

  updateUserPhoneFailure: createAction(
    '[UserPhone update] Failure',
    props<{ error: string }>()
  ),

  removeUserPhoneRequest: createAction(
    '[UserPhone remove] Request',
    props<{ phoneId: string }>()
  ),

  removeUserPhoneSuccess: createAction(
    '[UserPhone remove] Success',
    props<{ phone: UserPhone }>()
  ),

  removeUserPhoneFailure: createAction(
    '[UserPhone remove] Failure',
    props<{ error: string }>()
  ),
}