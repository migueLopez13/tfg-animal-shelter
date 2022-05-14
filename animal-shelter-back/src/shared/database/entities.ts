import { AdoptionEntity } from 'src/modules/adoption/entities/adoption.entity';
import { AnimalEntity } from 'src/modules/animal/entities/animal.entity';
import { ShelterEntity } from 'src/modules/shelter/entities/shelter.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';

export const entities = [
  AnimalEntity,
  AdoptionEntity,
  UserEntity,
  ShelterEntity,
];

export default entities;
