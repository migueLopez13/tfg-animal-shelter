import { ApiProperty } from '@nestjs/swagger';

export class ShelterSocialDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;

}
