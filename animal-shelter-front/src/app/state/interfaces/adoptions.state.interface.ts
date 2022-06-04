import { Adoption } from "src/app/common/interfaces/adoption.interface";

export interface AdoptionState {
  loading: boolean;
  adoptions: ReadonlyArray<Adoption>;
  error?: any;
}