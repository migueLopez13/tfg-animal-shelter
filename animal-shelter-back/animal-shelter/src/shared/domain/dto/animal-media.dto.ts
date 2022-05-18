import { ApiProperty } from '@nestjs/swagger';

export class AnimalMediaDTO {
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
