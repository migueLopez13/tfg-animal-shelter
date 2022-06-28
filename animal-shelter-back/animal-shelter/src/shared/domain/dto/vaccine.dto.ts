import { ApiProperty } from '@nestjs/swagger';

export class VaccineDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

}
