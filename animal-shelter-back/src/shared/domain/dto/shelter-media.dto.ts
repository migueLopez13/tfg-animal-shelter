import { ApiProperty } from '@nestjs/swagger';
import { ShelterEntity } from 'src/modules/shelter/entities/shelter.entity';
import { ShelterDTO } from './shelter.dto';

export class ShelterMediaDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  url: string;

  constructor(id: string, type: string, url: string) {
    this.id = id;
    this.type = type;
    this.url = url;
  }
}
