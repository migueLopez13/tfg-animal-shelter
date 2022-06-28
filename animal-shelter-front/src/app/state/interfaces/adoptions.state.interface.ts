import { Adoption } from "src/app/shared/domain/interfaces/adoption.interface";

export interface AdoptionState {
  loading: boolean;
  adoptions: ReadonlyArray<Adoption>;
  error?: any;
}