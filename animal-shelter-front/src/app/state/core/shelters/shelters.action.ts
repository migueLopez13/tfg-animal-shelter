import { createAction, props } from '@ngrx/store';
import { ShelterMedia } from 'src/app/common/interfaces/shelter-media.interface';
import { ShelterSocial } from 'src/app/common/interfaces/shelter-social.interface';
import { Shelter } from 'src/app/common/interfaces/shelter.interface';


export const SheltersActions = {

  loadSheltersRequest: createAction(
    '[Shelters load] Request',
  ),

  loadSheltersSuccess: createAction(
    '[Shelters load] Success',
    props<{
      shelters: Shelter[];
    }>()
  ),

  loadSheltersFailure: createAction(
    '[Shelters load] Failure',
    props<{
      error: string;
    }>()
  ),

  loadShelterRequest: createAction(
    '[Shelter load] Request',
    props<{
      shelterEmail: string;
    }>()
  ),

  loadShelterSuccess: createAction(
    '[Shelter load] Success',
    props<{
      shelter: Shelter;
    }>()
  ),

  loadShelterFailure: createAction(
    '[Shelter load] Failure',
    props<{
      error: string;
    }>()
  ),


  addShelterRequest: createAction(
    '[Shelter add] Request',
    props<{ shelter: Shelter }>()
  ),

  addShelterSuccess: createAction(
    '[Shelter add] Success',
    props<{ shelter: Shelter }>()
  ),

  addShelterFailure: createAction(
    '[Shelter add] Failure',
    props<{ error: string }>()
  ),

  updateShelterRequest: createAction(
    '[Shelter update] Request',
    props<{ shelterEmail: string, shelter: Shelter }>()
  ),

  updateShelterSuccess: createAction(
    '[Shelter update] Success',
    props<{ shelter: Shelter }>()
  ),

  updateShelterFailure: createAction(
    '[Shelter update] Failure',
    props<{ error: string }>()
  ),

  removeShelterRequest: createAction(
    '[Shelter remove] Request',
    props<{ shelterIEmail: string }>()
  ),

  removeShelterSuccess: createAction(
    '[Shelter remove] Success',
    props<{ shelter: Shelter }>()
  ),

  removeShelterFailure: createAction(
    '[Shelter remove] Failure',
    props<{ error: string }>()
  ),

  addShelterMediaRequest: createAction(
    '[ShelterMedia add] Request',
    props<{ media: ShelterMedia }>()
  ),

  addShelterMediaSuccess: createAction(
    '[ShelterMedia add] Success',
    props<{ media: ShelterMedia }>()
  ),

  addShelterMediaFailure: createAction(
    '[ShelterMedia add] Failure',
    props<{ error: string }>()
  ),

  updateShelterMediaRequest: createAction(
    '[ShelterMedia update] Request',
    props<{ mediaId: number, media: ShelterMedia }>()
  ),

  updateShelterMediaSuccess: createAction(
    '[ShelterMedia update] Success',
    props<{ media: ShelterMedia }>()
  ),

  updateShelterMediaFailure: createAction(
    '[ShelterMedia update] Failure',
    props<{ error: string }>()
  ),

  removeShelterMediaRequest: createAction(
    '[ShelterMedia remove] Request',
    props<{ mediaId: string }>()
  ),

  removeShelterMediaSuccess: createAction(
    '[ShelterMedia remove] Success',
    props<{ media: ShelterMedia }>()
  ),

  removeShelterMediaFailure: createAction(
    '[ShelterMedia remove] Failure',
    props<{ error: string }>()
  ),

  addShelterSocialRequest: createAction(
    '[ShelterSocial add] Request',
    props<{ social: ShelterSocial }>()
  ),

  addShelterSocialSuccess: createAction(
    '[ShelterSocial add] Success',
    props<{ social: ShelterSocial }>()
  ),

  addShelterSocialFailure: createAction(
    '[ShelterSocial add] Failure',
    props<{ error: string }>()
  ),

  updateShelterSocialRequest: createAction(
    '[ShelterSocial update] Request',
    props<{ socialId: number, Social: ShelterSocial }>()
  ),

  updateShelterSocialSuccess: createAction(
    '[ShelterSocial update] Success',
    props<{ social: ShelterSocial }>()
  ),

  updateShelterSocialFailure: createAction(
    '[ShelterSocial update] Failure',
    props<{ error: string }>()
  ),

  removeShelterSocialRequest: createAction(
    '[ShelterSocial remove] Request',
    props<{ socialId: string }>()
  ),

  removeShelterSocialSuccess: createAction(
    '[ShelterSocial remove] Success',
    props<{ social: ShelterSocial }>()
  ),

  removeShelterSocialFailure: createAction(
    '[ShelterSocial remove] Failure',
    props<{ error: string }>()
  ),
}