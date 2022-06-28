
import { createSelector } from '@ngrx/store';
import { AdoptionState } from '../../interfaces/adoptions.state.interface';
import { AppState } from '../../interfaces/app.state.interface';

const adoptionsFeature = ({ adoptions }: AppState) => adoptions;

export const AdoptionsSelectors = {
  selectAdoptions: createSelector(
    adoptionsFeature,
    ({ adoptions }: AdoptionState) => adoptions
  ),

  selectAdoptionsLoading: createSelector(
    adoptionsFeature,
    ({ loading }: AdoptionState) => loading
  ),

  selectAdoptionsError: createSelector(
    adoptionsFeature,
    ({ error }: AdoptionState) => error
  ),

  selectAdoptionById: (adoptionId: number) =>
    createSelector(adoptionsFeature, ({ adoptions }) =>
      adoptions.find(({ id }) => id === adoptionId)
    ),
};