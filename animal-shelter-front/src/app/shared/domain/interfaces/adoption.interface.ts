import { Animal } from "./animal.interface";

export interface Adoption {
  id: number;
  userEmail: string;
  animalId: number;
  animal: Animal
  date: string;
}