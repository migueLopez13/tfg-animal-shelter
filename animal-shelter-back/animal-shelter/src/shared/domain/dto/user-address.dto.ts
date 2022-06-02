import { ApiProperty } from '@nestjs/swagger';

export class UserAddressDTO {
  @ApiProperty()
  id: string;

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

}
