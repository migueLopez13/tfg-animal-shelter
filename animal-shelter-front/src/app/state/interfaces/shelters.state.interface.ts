import { Shelter } from "src/app/shared/domain/interfaces/shelter.interface";


export interface SheltersState {
  loading: boolean;
  shelters: ReadonlyArray<Shelter>;
  error?: any;
}