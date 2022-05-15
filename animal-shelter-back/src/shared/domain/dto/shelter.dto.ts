import { ApiProperty } from '@nestjs/swagger';
import { ShelterMediaDTO } from './shelter-media.dto';
import { ShelterSocialDTO } from './shelter-social.dto';

export class ShelterDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  countryCode: string;

  @ApiProperty()
  stateCode: string;

  @ApiProperty()
  provinceCode: string;

  @ApiProperty()
  zip: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  media: ShelterMediaDTO[];

  @ApiProperty()
  social: ShelterSocialDTO[];

  constructor(
    email: string,
    name: string,
    description: string,
    countryCode: string,
    stateCode: string,
    provinceCode: string,
    zip: string,
    address: string,
    media: ShelterMediaDTO[],
    social: ShelterSocialDTO[],
  ) {
    this.email = email;
    this.name = name;
    this.description = description;
    this.countryCode = countryCode;
    this.stateCode = stateCode;
    this.provinceCode = provinceCode;
    this.zip = zip;
    this.address = address;
    this.media = media;
    this.social = social;
  }
}
