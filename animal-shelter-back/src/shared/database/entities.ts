import { AdoptionEntity } from "src/modules/adoptions/entities/Adoption.entity";
import { AnimalEntity } from "src/modules/animals/entities/animal.entity";
import { UserEntity } from "src/modules/users/entities/user.entity";

export const entities = [
  AnimalEntity,
  AdoptionEntity,
  UserEntity
];

export default entities;