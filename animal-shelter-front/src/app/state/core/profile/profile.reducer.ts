import { createReducer, on } from '@ngrx/store';
import { ProfileState } from '../../interfaces/profile.state.interface';
import { ProfileActions } from './profile.action';


export const initialState: ProfileState = {
  loading: false,
  isAuthenticated: false,
  user: [],
};

export const ProfileReducer = createReducer(
  initialState,

  on(ProfileActions.checkUserRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.checkUserSuccess, (state, { user }) =>
    ({ ...state, loading: false, isAuthenticated: true, user: [user] })),

  on(ProfileActions.checkUserFailure, (state, { error }) =>
    ({ ...state, loading: false, isAuthenticated: false, error })),

  on(ProfileActions.logoutRequest, (state) =>
    ({ ...state, loading: true })),

  on(ProfileActions.logoutSuccess, (state) =>
    ({ ...state, loading: true, isAuthenticate: false, user: [] })),

);