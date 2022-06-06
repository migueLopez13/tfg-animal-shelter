import { createReducer, on } from '@ngrx/store';
import { AnimalsState } from '../../interfaces/animals.state.interface';
import { AnimalsActions } from './animals.action';



export const initialState: AnimalsState = {
  loading: false,
  animals: []
};

export const AnimalsReducer = createReducer(
  initialState,

  on(AnimalsActions.loadAnimalsRequest, (state) =>
    ({ ...state, loading: true })),

  on(AnimalsActions.loadAnimalsSuccess, (state, { animals }) =>
    ({ ...state, loading: false, animals })),

  on(AnimalsActions.loadAnimalsFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(AnimalsActions.loadAnimalsByKindRequest, (state) =>
    ({ ...state, loading: true })),

  on(AnimalsActions.loadAnimalsByKindSuccess, (state, { animals }) =>
    ({ ...state, loading: false, animals })),

  on(AnimalsActions.loadAnimalsByKindFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(AnimalsActions.loadAnimalRequest, (state) =>
    ({ ...state, loading: true })),

  on(AnimalsActions.loadAnimalSuccess, (state, { animal }) =>
    ({ ...state, loading: false, animals: [...state.animals, animal] })),

  on(AnimalsActions.loadAnimalFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(AnimalsActions.addAnimalRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(AnimalsActions.addAnimalSuccess, (state, { animal }) => ({
    ...state,
    loading: false,
    animals: [...state.animals, animal]
  })),

  on(AnimalsActions.addAnimalFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(AnimalsActions.updateAnimalRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(AnimalsActions.updateAnimalSuccess, (state, { animal }) => ({
    ...state,
    loading: false,
    animals: [...state.animals.map((_animal) => {
      return _animal.id === animal.id ? animal : _animal
    })]
  })),

  on(AnimalsActions.updateAnimalFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(AnimalsActions.removeAnimalRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(AnimalsActions.removeAnimalSuccess, (state, { animal }) => ({
    ...state,
    loading: false,
    animals: [...state.animals.filter(({ id }) => id !== animal.id)]
  })),

  on(AnimalsActions.removeAnimalFailure, (state, { error }) => ({
    ...state,
    loading: true,
    error
  })),

  on(AnimalsActions.addAnimalMediaRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(AnimalsActions.addAnimalMediaSuccess, (state, { media }) => ({
    ...state,
    loading: false,
    animals: [...state.animals.map((animal) => {
      if (animal.id === media.animalId) {
        animal.media?.push(media)
      }
      return animal;
    })]
  })),

  on(AnimalsActions.addAnimalMediaFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(AnimalsActions.updateAnimalMediaRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(AnimalsActions.updateAnimalMediaSuccess, (state, { media }) => ({
    ...state,
    loading: false,
    animals: [...state.animals.map((animal) => {
      if (animal.id === media.animalId) {
        animal.media?.map((_media) => _media.id === media.id ? media : _media)
      }
      return animal;
    })]
  })),

  on(AnimalsActions.updateAnimalMediaFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(AnimalsActions.removeAnimalMediaRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(AnimalsActions.removeAnimalMediaSuccess, (state, { media }) => ({
    ...state,
    loading: false,
    animals: [...state.animals.map((animal) => {
      if (animal.id === media.animalId) {
        animal.media?.filter(({ id }) => id !== media.id)
      }
      return animal;
    })]
  })),

  on(AnimalsActions.removeAnimalMediaFailure, (state, { error }) => ({
    ...state,
    loading: true,
    error
  })),

);