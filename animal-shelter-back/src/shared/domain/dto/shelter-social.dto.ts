import { ApiProperty } from '@nestjs/swagger';
import { ShelterEntity } from 'src/modules/shelter/entities/shelter.entity';
import { ShelterDTO } from './shelter.dto';

export class ShelterSocialDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;

  constructor(id: string, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}
