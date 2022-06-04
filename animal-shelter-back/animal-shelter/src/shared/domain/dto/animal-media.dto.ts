import { ApiProperty } from '@nestjs/swagger';

export class AnimalMediaDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  animalId: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  url: string;

}
