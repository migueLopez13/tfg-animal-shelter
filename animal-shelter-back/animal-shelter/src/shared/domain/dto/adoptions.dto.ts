import { ApiProperty } from '@nestjs/swagger';

export class AdoptionDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userEmail: string;

  @ApiProperty()
  animalId: string;

  @ApiProperty()
  date: string;

}
