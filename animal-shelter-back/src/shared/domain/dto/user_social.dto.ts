import { ApiProperty } from '@nestjs/swagger';

export class UserSocialDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userEmail: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;

  constructor(id: string, userEmail: string, name: string, url: string) {
    this.id = id;
    this.userEmail = userEmail;
    this.name = name;
    this.url = url;
  }
}
