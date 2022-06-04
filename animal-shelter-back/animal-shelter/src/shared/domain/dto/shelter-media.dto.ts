import { ApiProperty } from '@nestjs/swagger';

export class ShelterMediaDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  shelterEmail: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  url: string;

}
