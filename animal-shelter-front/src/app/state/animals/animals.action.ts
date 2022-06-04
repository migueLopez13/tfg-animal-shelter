import { createAction, props } from '@ngrx/store';
import { AnimalMedia } from 'src/app/common/interfaces/animal-media.interface';
import { Animal } from 'src/app/common/interfaces/animal.interface';

export const AnimalsActions = {

  loadAnimalsRequest: createAction(
    '[Animals load] Request',
  ),

  loadAnimalsSuccess: createAction(
    '[Animals load] Success',
    props<{
      animals: Animal[];
    }>()
  ),

  loadAnimalsFailure: createAction(
    '[Animals load] Failure',
    props<{
      error: string;
    }>()
  ),

  loadAnimalRequest: createAction(
    '[Animal load] Request',
    props<{
      animalId: string;
    }>()
  ),

  loadAnimalSuccess: createAction(
    '[Animal load] Success',
    props<{
      animal: Animal;
    }>()
  ),

  loadAnimalFailure: createAction(
    '[Animal load] Failure',
    props<{
      error: string;
    }>()
  ),


  addAnimalRequest: createAction(
    '[Animal add] Request',
    props<{ animal: Animal }>()
  ),

  addAnimalSuccess: createAction(
    '[Animal add] Success',
    props<{ animal: Animal }>()
  ),

  addAnimalFailure: createAction(
    '[Animal add] Failure',
    props<{ error: string }>()
  ),

  updateAnimalRequest: createAction(
    '[Animal add] Request',
    props<{ animalId: number, animal: Animal }>()
  ),

  updateAnimalSuccess: createAction(
    '[Animal add] Success',
    props<{ animal: Animal }>()
  ),

  updateAnimalFailure: createAction(
    '[Animal add] Failure',
    props<{ error: string }>()
  ),

  removeAnimalRequest: createAction(
    '[Animal remove] Request',
    props<{ animalId: string }>()
  ),

  removeAnimalSuccess: createAction(
    '[Animal remove] Success',
    props<{ animal: Animal }>()
  ),

  removeAnimalFailure: createAction(
    '[Animal remove] Failure',
    props<{ error: string }>()
  ),

  addAnimalMediaRequest: createAction(
    '[AnimalMedia add] Request',
    props<{ media: AnimalMedia }>()
  ),

  addAnimalMediaSuccess: createAction(
    '[AnimalMedia add] Success',
    props<{ media: AnimalMedia }>()
  ),

  addAnimalMediaFailure: createAction(
    '[AnimalMedia add] Failure',
    props<{ error: string }>()
  ),

  updateAnimalMediaRequest: createAction(
    '[AnimalMedia update] Request',
    props<{ mediaId: number, media: AnimalMedia }>()
  ),

  updateAnimalMediaSuccess: createAction(
    '[AnimalMedia update] Success',
    props<{ media: AnimalMedia }>()
  ),

  updateAnimalMediaFailure: createAction(
    '[AnimalMedia update] Failure',
    props<{ error: string }>()
  ),

  removeAnimalMediaRequest: createAction(
    '[AnimalMedia remove] Request',
    props<{ mediaId: string }>()
  ),

  removeAnimalMediaSuccess: createAction(
    '[AnimalMedia remove] Success',
    props<{ media: AnimalMedia }>()
  ),

  removeAnimalMediaFailure: createAction(
    '[AnimalMedia remove] Failure',
    props<{ error: string }>()
  ),
}