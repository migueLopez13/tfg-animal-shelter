import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  avatar: string;

  constructor(
    id: string,
    email: string,
    name: string,
    surname: string,
    avatar: string,
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.avatar = avatar;
  }
}
