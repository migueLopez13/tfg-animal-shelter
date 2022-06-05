
import { createSelector } from '@ngrx/store';
import { AnimalsState } from '../../interfaces/animals.state.interface';
import { AppState } from '../../interfaces/app.state.interface';

const animalsFeature = ({ animals }: AppState) => animals;

export const AnimalsSelectors = {
  selectAnimals: createSelector(
    animalsFeature,
    ({ animals }: AnimalsState) => animals
  ),

  selectAnimalsLoading: createSelector(
    animalsFeature,
    ({ loading }: AnimalsState) => loading
  ),

  selectAnimalsError: createSelector(
    animalsFeature,
    ({ error }: AnimalsState) => error
  ),

  selectAnimalById: (animalId: number) =>
    createSelector(animalsFeature, ({ animals }) =>
      animals.find(({ id }) => id === animalId)
    ),
};