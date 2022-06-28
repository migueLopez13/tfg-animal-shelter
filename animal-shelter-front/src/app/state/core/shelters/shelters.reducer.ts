
import { createReducer, on } from '@ngrx/store';
import { SheltersState } from '../../interfaces/shelters.state.interface';
import { SheltersActions } from './shelters.action';




export const initialState: SheltersState = {
  loading: false,
  shelters: []
};

export const SheltersReducer = createReducer(
  initialState,

  on(SheltersActions.loadSheltersRequest, (state) =>
    ({ ...state, loading: true })),

  on(SheltersActions.loadSheltersSuccess, (state, { shelters }) =>
    ({ ...state, loading: false, shelters })),

  on(SheltersActions.loadSheltersFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(SheltersActions.loadShelterRequest, (state) =>
    ({ ...state, loading: true })),

  on(SheltersActions.loadShelterSuccess, (state, { shelter }) =>
    ({ ...state, loading: false, shelters: [...state.shelters, shelter] })),

  on(SheltersActions.loadShelterFailure, (state, { error }) =>
    ({ ...state, loading: false, error })),

  on(SheltersActions.addShelterRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(SheltersActions.addShelterSuccess, (state, { shelter }) => ({
    ...state,
    loading: false,
    Shelters: [...state.shelters, shelter]
  })),

  on(SheltersActions.addShelterFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(SheltersActions.updateShelterRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(SheltersActions.updateShelterSuccess, (state, { shelter }) => ({
    ...state,
    loading: false,
    Shelters: [...state.shelters.map((_shelter) => {
      return _shelter.email === shelter.email ? shelter : _shelter
    })]
  })),

  on(SheltersActions.updateShelterFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(SheltersActions.removeShelterRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(SheltersActions.removeShelterSuccess, (state, { shelter }) => ({
    ...state,
    loading: false,
    Shelters: [...state.shelters.filter(({ email }) => email !== shelter.email)]
  })),

  on(SheltersActions.removeShelterFailure, (state, { error }) => ({
    ...state,
    loading: true,
    error
  })),

  on(SheltersActions.addShelterMediaRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(SheltersActions.addShelterMediaSuccess, (state, { media }) => ({
    ...state,
    loading: false,
    Shelters: [...state.shelters.map((shelter) => {
      if (shelter.email === media.shelterEmail) {
        shelter.media?.push(media)
      }
      return shelter;
    })]
  })),

  on(SheltersActions.addShelterMediaFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(SheltersActions.updateShelterMediaRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(SheltersActions.updateShelterMediaSuccess, (state, { media }) => ({
    ...state,
    loading: false,
    Shelters: [...state.shelters.map((shelter) => {
      if (shelter.email === media.shelterEmail) {
        shelter.media?.map((_media) => _media.id === media.id ? media : _media)
      }
      return shelter;
    })]
  })),

  on(SheltersActions.updateShelterMediaFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(SheltersActions.removeShelterMediaRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(SheltersActions.removeShelterMediaSuccess, (state, { media }) => ({
    ...state,
    loading: false,
    Shelters: [...state.shelters.map((shelter) => {
      if (shelter.email === media.shelterEmail) {
        shelter.media?.filter(({ id }) => id !== media.id)
      }
      return shelter;
    })]
  })),

  on(SheltersActions.removeShelterMediaFailure, (state, { error }) => ({
    ...state,
    loading: true,
    error
  })),

  on(SheltersActions.addShelterSocialRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(SheltersActions.addShelterSocialSuccess, (state, { social }) => ({
    ...state,
    loading: false,
    Shelters: [...state.shelters.map((shelter) => {
      if (shelter.email === social.shelterEmail) {
        shelter.social?.push(social)
      }
      return shelter;
    })]
  })),

  on(SheltersActions.addShelterSocialFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(SheltersActions.updateShelterSocialRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(SheltersActions.updateShelterSocialSuccess, (state, { social }) => ({
    ...state,
    loading: false,
    Shelters: [...state.shelters.map((shelter) => {
      if (shelter.email === social.shelterEmail) {
        shelter.social?.map((_social) => _social.id === social.id ? social : _social)
      }
      return shelter;
    })]
  })),

  on(SheltersActions.updateShelterSocialFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(SheltersActions.removeShelterSocialRequest, (state) => ({
    ...state,
    loading: true,
  })),

  on(SheltersActions.removeShelterSocialSuccess, (state, { social }) => ({
    ...state,
    loading: false,
    Shelters: [...state.shelters.map((shelter) => {
      if (shelter.email === social.shelterEmail) {
        shelter.social?.filter(({ id }) => id !== social.id)
      }
      return shelter;
    })]
  })),

  on(SheltersActions.removeShelterSocialFailure, (state, { error }) => ({
    ...state,
    loading: true,
    error
  })),

);