import { Shelter } from "src/app/common/interfaces/shelter.interface";


export interface SheltersState {
  loading: boolean;
  shelters: ReadonlyArray<Shelter>;
  error?: any;
}