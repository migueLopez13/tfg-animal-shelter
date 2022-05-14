import { RoleDTO } from 'src/shared/domain/dto/role.dto';
import { UserAddressDTO } from 'src/shared/domain/dto/user-address.dto';
import { UserPhoneDTO } from 'src/shared/domain/dto/user-phone.dto';
import { UserSocialDTO } from 'src/shared/domain/dto/user-social.dto';
import { UserDTO } from 'src/shared/domain/dto/user.dto';
import { RoleEntity } from '../role/entities/role.entity';
import { UserAddressEntity } from '../user-address/entities/user-address.entity';
import { UserPhoneEntity } from '../user-phone/entities/user-phone.entity';
import { UserSocialEntity } from '../user-social/entities/user-social.entity';
import { UserEntity } from './entities/user.entity';

export class UsersMapper {
  constructor() {}

  dtoToEntity(user: UserDTO) {
    return new UserEntity(user.email, user.name, user.surname, user.avatar);
  }
}
