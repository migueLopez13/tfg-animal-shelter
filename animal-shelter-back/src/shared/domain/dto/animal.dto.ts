export interface AnimalDTO {
  id: string;
  name: string;
  birthdate: string;
  gender: string;
  species: string;
  breed: string;
  vaccinated: VaccineDTO[];
  size: string;
  dewormed: boolean;
  adopted: boolean;
  arrivalDate: string;
  images: string[];
  shelterId: string;
}

export interface VaccineDTO {
  id: string;
  name: string;
}