import { createReducer, on } from '@ngrx/store';
import { UserPhone } from 'src/app/shared/domain/interfaces/user-phone.interface';
import { User } from 'src/app/shared/domain/interfaces/user.interface';
import { ProfileState } from '../../interfaces/profile.state.interface';
import { ProfileActions } from './profile.action';


export const initialState: ProfileState = {
  loading: false,
  isAuthenticated: false,
  user: {} as User,
  phones: []
};

export const ProfileReducer = createReducer(
  initialState,

  on(ProfileActions.checkUserRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.checkUserSuccess, (state, { user }) => {
    const phones = user.phone as UserPhone[]
    return ({ ...state, loading: false, isAuthenticated: true, user: user, phones })
  }),

  on(ProfileActions.checkUserFailure, (state, { error }) =>
    ({ ...state, loading: false, isAuthenticated: false, error })),

  on(ProfileActions.updateProfileRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.updateProfileSuccess, (state, { user }) =>
    ({ ...state, loading: false, user })),

  on(ProfileActions.updateProfileFailure, (state, { error }) =>
    ({ ...state, loading: false, isAuthenticated: false, error })),

  on(ProfileActions.updateAvatarRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.updateAvatarSuccess, (state, { user }) =>
    ({ ...state, loading: false, user })),

  on(ProfileActions.updateAvatarFailure, (state, { error }) =>
    ({ ...state, loading: false, isAuthenticated: false, error })),

  on(ProfileActions.addPhoneRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.addPhoneSuccess, (state, { phone }) => ({
    ...state, loading: false,
    phones: [...state.phones, phone]
  })),

  on(ProfileActions.addPhoneFailure, (state, { error }) =>
    ({ ...state, loading: false, isAuthenticated: false, error })),


  on(ProfileActions.updatePhoneRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.updatePhoneSuccess, (state, { phone }) => ({
    ...state, loading: false,
    phones: state.phones.map((_phone) =>
      _phone.id === phone.id ? phone : _phone)
  })
  ),

  on(ProfileActions.updatePhoneFailure, (state, { error }) =>
    ({ ...state, loading: false, isAuthenticated: false, error })),

  on(ProfileActions.deletePhoneRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.deletePhoneSuccess, (state, { idPhone }) =>
  ({
    ...state, loading: false,
    phones: state.phones.filter(({ id }) => id !== idPhone
    )
  })
  ),

  on(ProfileActions.deletePhoneFailure, (state, { error }) =>
    ({ ...state, loading: false, isAuthenticated: false, error })),

  on(ProfileActions.logoutRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.logoutSuccess, (state) =>
    ({ ...state, loading: true, isAuthenticate: false, user: {} as User })),

);