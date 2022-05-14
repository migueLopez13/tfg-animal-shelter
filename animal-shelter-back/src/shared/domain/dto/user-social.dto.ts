import { ApiProperty } from '@nestjs/swagger';

export class UserSocialDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  userEmail: string;

  constructor(id: string, name: string, url: string, userEmail: string) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.userEmail = userEmail;
  }
}
