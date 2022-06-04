import { ActionReducerMap } from "@ngrx/store";
import { AdoptionsEffects } from "./adoptions/adoptions.effects";
import { AdoptionsReducer } from "./adoptions/adoptions.reducer";
import { AnimalsEffects } from "./animals/animals.effects";
import { AnimalsReducer } from "./animals/animals.reducer";
import { AppState } from "./interfaces/app.state.interface";


export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  adoptions: AdoptionsReducer,
  animals: AnimalsReducer,
  /* shelters: SheltersReducer,
  users: UsersReducer */
};

export const ROOT_EFFECTS = [
  AdoptionsEffects, AnimalsEffects, /* SheltersEffects, UsersEffects */
];

