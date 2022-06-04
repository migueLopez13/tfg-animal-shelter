import { AdoptionState } from "./adoptions.state.interface";
import { AnimalsState } from "./animals.state.interface";


export interface AppState {
  adoptions: AdoptionState;
  animals: AnimalsState;
}