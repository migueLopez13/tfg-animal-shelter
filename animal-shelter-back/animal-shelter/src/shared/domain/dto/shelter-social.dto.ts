import { ApiProperty } from '@nestjs/swagger';

export class ShelterSocialDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  shelterEmail: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;

}
