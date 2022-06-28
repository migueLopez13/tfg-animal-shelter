import { ActionReducerMap } from "@ngrx/store";
import { AdoptionsEffects } from "./core/adoptions/adoptions.effects";
import { AdoptionsReducer } from "./core/adoptions/adoptions.reducer";
import { AnimalsEffects } from "./core/animals/animals.effects";
import { AnimalsReducer } from "./core/animals/animals.reducer";
import { ProfileEffects } from "./core/profile/profile.effects";
import { ProfileReducer } from "./core/profile/profile.reducer";
import { SheltersEffects } from "./core/shelters/shelters.effects";
import { SheltersReducer } from "./core/shelters/shelters.reducer";
import { UsersEffects } from "./core/users/users.effects";
import { UsersReducer } from "./core/users/users.reducer";
import { AppState } from "./interfaces/app.state.interface";


export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  adoptions: AdoptionsReducer,
  animals: AnimalsReducer,
  shelters: SheltersReducer,
  users: UsersReducer,
  profile: ProfileReducer
};

export const ROOT_EFFECTS = [
  AdoptionsEffects, AnimalsEffects, SheltersEffects, UsersEffects, ProfileEffects
];

