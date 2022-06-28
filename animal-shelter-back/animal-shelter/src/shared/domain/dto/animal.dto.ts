import { ApiProperty } from '@nestjs/swagger';
import { AnimalMediaDTO } from './animal-media.dto';
import { VaccineDTO } from './vaccine.dto';

export class AnimalDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  birthdate: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  kind: string;

  @ApiProperty()
  breed: string;

  @ApiProperty()
  size: string;

  @ApiProperty()
  dewormed: boolean;

  @ApiProperty()
  description: string;

  @ApiProperty()
  arrivalDate: string;

  @ApiProperty()
  shelterEmail: string;

  @ApiProperty()
  media: AnimalMediaDTO[];

  @ApiProperty()
  vaccine: VaccineDTO[];

}
