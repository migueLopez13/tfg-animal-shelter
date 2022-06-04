import { AnimalMedia } from "./animal-media.interface";
import { Vaccine } from "./vaccine.interface";

export interface Animal {
  id: string;
  name: string;
  birthdate: string;
  gender: string;
  kind: string;
  breed?: string;
  size: string;
  dewormed: boolean;
  description: string;
  arrivalDate: string;
  shelterEmail: string;
  media?: AnimalMedia[];
  vaccine?: Vaccine[];
}