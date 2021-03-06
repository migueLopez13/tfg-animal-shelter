
import { createSelector } from '@ngrx/store';
import { AppState } from '../../interfaces/app.state.interface';
import { ProfileState } from '../../interfaces/profile.state.interface';

const profileFeature = ({ profile }: AppState) => profile;

export const ProfileSelectors = {
  selectCurrentUser: createSelector(
    profileFeature,
    ({ user }: ProfileState) => user
  ),

  selectUserSocialLinks: createSelector(
    profileFeature,
    ({ socialLinks }: ProfileState) => socialLinks
  ),

  selectUserAddresses: createSelector(
    profileFeature,
    ({ addresses }: ProfileState) => addresses
  ),

  selectUserPhones: createSelector(
    profileFeature,
    ({ phones }: ProfileState) => phones
  ),

  selectAuthLoading: createSelector(
    profileFeature,
    ({ loading }: ProfileState) => loading
  ),

  selectAuthError: createSelector(
    profileFeature,
    ({ error }: ProfileState) => error
  ),

  selectIsAuthenticated: createSelector(
    profileFeature,
    ({ isAuthenticated }: ProfileState) => isAuthenticated
  )
};