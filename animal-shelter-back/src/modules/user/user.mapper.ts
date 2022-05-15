import { UserDTO } from 'src/shared/domain/dto/user.dto';
import { RoleEntity } from '../role/entities/role.entity';
import { UserAddressEntity } from '../user-address/entities/user-address.entity';
import { UserPhoneEntity } from '../user-phone/entities/user-phone.entity';
import { UserSocialEntity } from '../user-social/entities/user-social.entity';
import { UserEntity } from './entities/user.entity';

export class UsersMapper {
  constructor() {}

  dtoToEntity(user: UserDTO): UserEntity {
    const social = user.social.map(
      (social) => new UserSocialEntity(social.id, social.name, social.url),
    );

    const address = user.address.map(
      (address) =>
        new UserAddressEntity(
          address.id,
          address.countryCode,
          address.stateCode,
          address.provinceCode,
          address.zip,
          address.address,
        ),
    );

    const phone = user.phone.map(
      (phone) => new UserPhoneEntity(phone.id, phone.countryCode, phone.phone),
    );

    const role = user.role.map((role) => new RoleEntity(role.id, role.name));

    return new UserEntity(
      user.email,
      user.name,
      user.surname,
      user.avatar,
      social,
      address,
      phone,
      role,
    );
  }
}
