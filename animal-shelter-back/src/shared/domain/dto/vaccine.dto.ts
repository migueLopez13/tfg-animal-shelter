import { ApiProperty } from '@nestjs/swagger';

export class VaccineDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
