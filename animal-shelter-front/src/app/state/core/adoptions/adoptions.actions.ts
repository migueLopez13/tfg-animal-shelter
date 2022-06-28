import { createAction, props } from '@ngrx/store';
import { Adoption } from 'src/app/shared/domain/interfaces/adoption.interface';

export const AdoptionsActions = {

  loadAdoptionsRequest: createAction(
    '[Adoptions load] Request',
  ),

  loadAdoptionsSuccess: createAction(
    '[Adoptions load] Success',
    props<{
      adoptions: Adoption[];
    }>()
  ),

  loadAdoptionsFailure: createAction(
    '[Adoptions load] Failure',
    props<{
      error: string;
    }>()
  ),

  loadAdoptionRequest: createAction(
    '[Adoption load] Request',
    props<{
      adoptionId: string;
    }>()
  ),

  loadAdoptionSuccess: createAction(
    '[Adoption load] Success',
    props<{
      adoption: Adoption;
    }>()
  ),

  loadAdoptionFailure: createAction(
    '[Adoption load] Failure',
    props<{
      error: string;
    }>()
  ),


  addAdoptionRequest: createAction(
    '[Adoption add] Request',
    props<{ adoption: Adoption }>()
  ),

  addAdoptionSuccess: createAction(
    '[Adoption add] Success',
    props<{ adoption: Adoption }>()
  ),

  addAdoptionFailure: createAction(
    '[Adoption add] Failure',
    props<{ error: string }>()
  ),

  removeAdoptionRequest: createAction(
    '[Adoption remove] Request',
    props<{ adoptionId: string }>()
  ),

  removeAdoptionSuccess: createAction(
    '[Adoption remove] Request',
    props<{ adoption: Adoption }>()
  ),

  removeAdoptionFailure: createAction(
    '[Adoption remove] Request',
    props<{ error: string }>()
  ),

}