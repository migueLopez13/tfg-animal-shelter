import { ApiProperty } from '@nestjs/swagger';

export class RoleDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  userEmail: string;

  constructor(id: string, name: string, userEmail: string) {
    this.id = id;
    this.name = name;
    this.userEmail = userEmail;
  }
}
