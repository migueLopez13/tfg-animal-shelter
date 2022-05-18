import { AdoptionsEntity } from '../../modules/adoption/entities/adoption.entity';
import { AnimalMediaEntity } from '../../modules/animal-media/entities/animal-media.entity';
import { AnimalEntity } from '../../modules/animal/entities/animal.entity';
import { RoleEntity } from '../../modules/role/entities/role.entity';
import { ShelterMediaEntity } from '../../modules/shelter-media/entities/shelter-media.entity';
import { ShelterSocialEntity } from '../../modules/shelter-social/entities/shelter-social.entity';
import { ShelterEntity } from '../../modules/shelter/entities/shelter.entity';
import { UserAddressEntity } from '../../modules/user-address/entities/user-address.entity';
import { UserPhoneEntity } from '../../modules/user-phone/entities/user-phone.entity';
import { UserSocialEntity } from '../../modules/user-social/entities/user-social.entity';
import { VaccineEntity } from '../../modules/vaccine/entities/vaccine.entity';
import { UserEntity } from '../../modules/user/entities/user.entity';

export const entities = [
  UserEntity,
  RoleEntity,
  UserSocialEntity,
  UserAddressEntity,
  UserPhoneEntity,
  ShelterEntity,
  ShelterSocialEntity,
  ShelterMediaEntity,
  AnimalEntity,
  AnimalMediaEntity,
  VaccineEntity,
  AdoptionsEntity,
];

export default entities;
