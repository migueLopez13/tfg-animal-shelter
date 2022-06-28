import { createAction, props } from '@ngrx/store';
import { UserAddress } from 'src/app/shared/domain/interfaces/user-address.interface';
import { UserPhone } from 'src/app/shared/domain/interfaces/user-phone.interface';
import { UserSocial } from 'src/app/shared/domain/interfaces/user-social.interface';
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

  addAddressRequest: createAction(
    '[ProfileAddress add] Request',
    props<{
      address: UserAddress;
    }>()
  ),


  addAddressSuccess: createAction(
    '[ProfileAddress add] Success',
    props<{
      address: UserAddress;
    }>()
  ),

  addAddressFailure: createAction(
    '[ProfileAddress add] Failure',
    props<{
      error: string;
    }>()
  ),

  updateAddressRequest: createAction(
    '[ProfileAddress update] Request',
    props<{
      addressId: number,
      address: UserAddress
    }>()
  ),

  updateAddressSuccess: createAction(
    '[ProfileAddress update] Success',
    props<{
      address: UserAddress;
    }>()
  ),

  updateAddressFailure: createAction(
    '[ProfileAddress update] Failure',
    props<{
      error: string;
    }>()
  ),

  deleteAddressRequest: createAction(
    '[ProfileAddress remove] Request',
    props<{
      idAddress: number;
    }>()
  ),

  deleteAddressSuccess: createAction(
    '[ProfileAddress remove] Success',
    props<{
      idAddress: number;
    }>()
  ),

  deleteAddressFailure: createAction(
    '[ProfileAddress remove] Failure',
    props<{
      error: string;
    }>()
  ),

  addSocialRequest: createAction(
    '[ProfileSocial add] Request',
    props<{
      social: UserSocial;
    }>()
  ),


  addSocialSuccess: createAction(
    '[ProfileSocial add] Success',
    props<{
      social: UserSocial;
    }>()
  ),

  addSocialFailure: createAction(
    '[ProfileSocial add] Failure',
    props<{
      error: string;
    }>()
  ),

  updateSocialRequest: createAction(
    '[ProfileSocial update] Request',
    props<{
      socialId: number,
      social: UserSocial
    }>()
  ),

  updateSocialSuccess: createAction(
    '[ProfileSocial update] Success',
    props<{
      social: UserSocial;
    }>()
  ),

  updateSocialFailure: createAction(
    '[ProfileSocial update] Failure',
    props<{
      error: string;
    }>()
  ),

  deleteSocialRequest: createAction(
    '[ProfileSocial remove] Request',
    props<{
      idSocial: number;
    }>()
  ),

  deleteSocialSuccess: createAction(
    '[ProfileSocial remove] Success',
    props<{
      idSocial: number;
    }>()
  ),

  deleteSocialFailure: createAction(
    '[ProfileSocial remove] Failure',
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