import { Animal } from "src/app/shared/domain/interfaces/animal.interface";


export interface AnimalsState {
  loading: boolean;
  animals: ReadonlyArray<Animal>;
  error?: any;
}