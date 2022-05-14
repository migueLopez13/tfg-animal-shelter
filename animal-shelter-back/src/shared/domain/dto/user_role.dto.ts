import { ApiProperty } from '@nestjs/swagger';

export class UserRoleDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userEmail: string;

  @ApiProperty()
  roleId: number;

  constructor(id: string, userEmail: string, roleId: number) {
    this.id = id;
    this.userEmail = userEmail;
    this.roleId = roleId;
  }
}
