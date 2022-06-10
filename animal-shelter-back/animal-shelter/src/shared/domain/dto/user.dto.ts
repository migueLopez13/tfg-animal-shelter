import { ApiProperty } from '@nestjs/swagger';
import { UserCredential } from 'src/shared/database/entities/user-credentials.entity';
import { RoleDTO } from './role.dto';
import { UserAddressDTO } from './user-address.dto';
import { UserPhoneDTO } from './user-phone.dto';
import { UserSocialDTO } from './user-social.dto';

export class UserDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  avatar: string;

  @ApiProperty()
  social: UserSocialDTO[];

  @ApiProperty()
  address: UserAddressDTO[];

  @ApiProperty()
  phone: UserPhoneDTO[];

  @ApiProperty()
  role: RoleDTO[];
}
