import { createReducer, on } from '@ngrx/store';
import { AdoptionState } from '../interfaces/adoptions.state.interface';
import { AdoptionsActions } from './adoptions.actions';



export const initialState: AdoptionState = {
  loading: false,
  adoptions: []
};

export const AdoptionsReducer = createReducer(
  initialState,

  on(AdoptionsActions.loadAdoptionsRequest, (state) =>
    ({ ...state, loading: true })),

  on(AdoptionsActions.loadAdoptionsSuccess, (state, { adoptions }) =>
    ({ ...state, loading: false, adoptions })),

  on(AdoptionsActions.loadAdoptionsFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(AdoptionsActions.loadAdoptionRequest, (state) =>
    ({ ...state, loading: true })),

  on(AdoptionsActions.loadAdoptionSuccess, (state, { adoption }) =>
    ({ ...state, loading: false, adoption })),

  on(AdoptionsActions.loadAdoptionFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(AdoptionsActions.addAdoptionRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(AdoptionsActions.addAdoptionSuccess, (state, { adoption }) => ({
    ...state,
    loading: false,
    adoptions: [...state.adoptions, adoption]
  })),

  on(AdoptionsActions.addAdoptionFailure, (state, error) => ({
    ...state,
    loading: false,
    error
  })),

  on(AdoptionsActions.removeAdoptionRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(AdoptionsActions.removeAdoptionSuccess, (state, { adoption }) => ({
    ...state,
    loading: false,
    adoptions: [...state.adoptions.filter(({ id }) => id !== adoption.id)]
  })),

  on(AdoptionsActions.removeAdoptionFailure, (state, { error }) => ({
    ...state,
    loading: true,
    error
  })),
);