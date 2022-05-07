import { AdoptionEntity } from "src/modules/adoptions/entities/Adoption.entity";
import { AnimalEntity } from "src/modules/animals/entities/animal.entity";
import { ShelterEntity } from "src/modules/shelters/entities/shelter.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";

export const entities = [
  AnimalEntity,
  AdoptionEntity,
  UserEntity,
  ShelterEntity
];

export default entities;