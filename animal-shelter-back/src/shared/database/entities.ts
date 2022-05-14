import { RoleEntity } from 'src/modules/role/entities/role.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { UserAddressEntity } from 'src/modules/user_address/entities/user_address.entity';
import { UserPhoneEntity } from 'src/modules/user_phone/entities/user_phone.entity';
import { UserRoleEntity } from 'src/modules/user_role/entities/user_role.entity';
import { UserSocialEntity } from 'src/modules/user_social/entities/user_social.entity';

export const entities = [
  UserEntity,
  RoleEntity,
  UserRoleEntity,
  UserSocialEntity,
  UserAddressEntity,
  UserPhoneEntity,
];

export default entities;
