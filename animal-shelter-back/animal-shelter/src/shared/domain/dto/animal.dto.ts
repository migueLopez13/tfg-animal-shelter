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

  constructor(
    id: string,
    name: string,
    birthdate: string,
    gender: string,
    kind: string,
    breed: string,
    size: string,
    dewormed: boolean,
    description: string,
    arrivalDate: string,
    shelterEmail: string,
    media: AnimalMediaDTO[],
    vaccine: VaccineDTO[],
  ) {
    this.id = id;
    this.name = name;
    this.birthdate = birthdate;
    this.gender = gender;
    this.kind = kind;
    this.breed = breed;
    this.size = size;
    this.dewormed = dewormed;
    this.description = description;
    this.arrivalDate = arrivalDate;
    this.shelterEmail = shelterEmail;
    this.media = media;
    this.vaccine = vaccine;
  }
}
