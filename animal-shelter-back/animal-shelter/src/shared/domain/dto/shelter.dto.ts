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

}
