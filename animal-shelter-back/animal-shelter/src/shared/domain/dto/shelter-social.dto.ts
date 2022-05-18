import { ApiProperty } from '@nestjs/swagger';

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
