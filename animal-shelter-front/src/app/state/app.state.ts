import { ActionReducerMap } from "@ngrx/store";
import { AdoptionsEffects } from "./core/adoptions/adoptions.effects";
import { AdoptionsReducer } from "./core/adoptions/adoptions.reducer";
import { AnimalsEffects } from "./core/animals/animals.effects";
import { AnimalsReducer } from "./core/animals/animals.reducer";
import { AuthEffects } from "./core/auth/auth.effects";
import { AuthReducer } from "./core/auth/auth.reducer";
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
  auth: AuthReducer
};

export const ROOT_EFFECTS = [
  AdoptionsEffects, AnimalsEffects, SheltersEffects, UsersEffects, AuthEffects
];

