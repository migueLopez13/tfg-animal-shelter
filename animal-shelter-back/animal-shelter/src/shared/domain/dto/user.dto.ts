import { ApiProperty } from '@nestjs/swagger';
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

  constructor(
    email: string,
    name: string,
    surname: string,
    avatar: string,
    social: UserSocialDTO[],
    address: UserAddressDTO[],
    phone: UserPhoneDTO[],
    role: RoleDTO[],
  ) {
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.avatar = avatar;
    this.social = social;
    this.address = address;
    this.phone = phone;
    this.role = role;
  }
}
