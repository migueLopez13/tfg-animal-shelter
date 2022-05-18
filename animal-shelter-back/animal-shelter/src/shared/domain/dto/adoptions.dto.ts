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

  constructor(id: string, userEmail: string, animalId: string, date: string) {
    this.id = id;
    this.userEmail = userEmail;
    this.animalId = animalId;
    this.date = date;
  }
}
