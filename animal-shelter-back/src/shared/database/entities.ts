import { RoleEntity } from 'src/modules/role/entities/role.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { UserAddressEntity } from 'src/modules/user-address/entities/user-address.entity';
import { UserSocialEntity } from 'src/modules/user-social/entities/user-social.entity';
import { UserPhoneEntity } from 'src/modules/user-phone/entities/user-phone.entity';

export const entities = [
  UserEntity,
  RoleEntity,
  UserSocialEntity,
  UserAddressEntity,
  UserPhoneEntity,
];

export default entities;
