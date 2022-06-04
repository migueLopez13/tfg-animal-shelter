import { Animal } from "src/app/common/interfaces/animal.interface";


export interface AnimalsState {
  loading: boolean;
  animals: ReadonlyArray<Animal>;
  error?: any;
}