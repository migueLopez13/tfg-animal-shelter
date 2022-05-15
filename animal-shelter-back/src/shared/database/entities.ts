import { RoleEntity } from 'src/modules/role/entities/role.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { UserAddressEntity } from 'src/modules/user-address/entities/user-address.entity';
import { UserSocialEntity } from 'src/modules/user-social/entities/user-social.entity';
import { UserPhoneEntity } from 'src/modules/user-phone/entities/user-phone.entity';
import { ShelterEntity } from 'src/modules/shelter/entities/shelter.entity';
import { ShelterMediaEntity } from 'src/modules/shelter-media/entities/shelter-media.entity';
import { ShelterSocialEntity } from 'src/modules/shelter-social/entities/shelter-social.entity';

export const entities = [
  UserEntity,
  RoleEntity,
  UserSocialEntity,
  UserAddressEntity,
  UserPhoneEntity,
  ShelterEntity,
  ShelterSocialEntity,
  ShelterMediaEntity,
];

export default entities;
