
import { createSelector } from '@ngrx/store';
import { AppState } from '../../interfaces/app.state.interface';
import { SheltersState } from '../../interfaces/shelters.state.interface';

const SheltersFeature = ({ shelters }: AppState) => shelters;

export const SheltersSelectors = {
  selectShelters: createSelector(
    SheltersFeature,
    ({ shelters }: SheltersState) => shelters
  ),

  selectSheltersLoading: createSelector(
    SheltersFeature,
    ({ loading }: SheltersState) => loading
  ),

  selectSheltersError: createSelector(
    SheltersFeature,
    ({ error }: SheltersState) => error
  ),

  selectShelterById: (shelterEmail: string) =>
    createSelector(SheltersFeature, ({ shelters }) =>
      shelters.find(({ email }) => email === shelterEmail)
    ),
};