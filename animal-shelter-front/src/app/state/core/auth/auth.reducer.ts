import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../../interfaces/auth.state.interface';
import { AuthActions } from './auth.action';


export const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  user: undefined,
};

export const AuthReducer = createReducer(
  initialState,

  on(AuthActions.checkUserRequest, (state) =>
    ({ ...state, loading: true })),

  on(AuthActions.checkUserSuccess, (state, { user }) =>
    ({ ...state, loading: false, isAuthenticated: true, user })),

  on(AuthActions.checkUserFailure, (state, { error }) =>
    ({ ...state, loading: false, isAuthenticated: false, error })),


  on(AuthActions.logoutRequest, (state) =>
    ({ ...state, loading: true })),

  on(AuthActions.logoutSuccess, (state) =>
    ({ ...state, loading: true, isAuthenticate: false, user: undefined })),

);