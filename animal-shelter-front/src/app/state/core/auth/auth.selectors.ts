
import { createSelector } from '@ngrx/store';
import { AppState } from '../../interfaces/app.state.interface';
import { AuthState } from '../../interfaces/auth.state.interface';

const authFeature = ({ auth }: AppState) => auth;

export const AuthSelectors = {
  selectCurrentUser: createSelector(
    authFeature,
    ({ user }: AuthState) => user
  ),

  selectAuthLoading: createSelector(
    authFeature,
    ({ loading }: AuthState) => loading
  ),

  selectAuthError: createSelector(
    authFeature,
    ({ error }: AuthState) => error
  ),

  selectIsAuthenticated: createSelector(
    authFeature,
    ({ isAuthenticated }: AuthState) => isAuthenticated
  )
};