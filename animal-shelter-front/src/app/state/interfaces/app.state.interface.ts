import { AdoptionState } from "./adoptions.state.interface";
import { AnimalsState } from "./animals.state.interface";
import { ProfileState } from "./profile.state.interface";
import { SheltersState } from "./shelters.state.interface";
import { UsersState } from "./users.state.interface";


export interface AppState {
  adoptions: AdoptionState;
  animals: AnimalsState;
  shelters: SheltersState;
  users: UsersState;
  profile: ProfileState
}