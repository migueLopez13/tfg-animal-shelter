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

}
