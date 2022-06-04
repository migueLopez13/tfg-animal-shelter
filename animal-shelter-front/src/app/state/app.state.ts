import { ActionReducerMap } from "@ngrx/store";
import { AdoptionsEffects } from "./adoptions/adoptions.effects";
import { AdoptionsReducer } from "./adoptions/adoptions.reducer";
import { AppState } from "./interfaces/app.state.interface";


export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  adoptions: AdoptionsReducer,
};

export const ROOT_EFFECTS = [AdoptionsEffects]

