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

  @ApiProperty()
  userEmail: string;

  constructor(
    id: string,
    countryCode: string,
    stateCode: string,
    provinceCode: string,
    zip: string,
    address: string,
    userEmail: string,
  ) {
    this.id = id;
    this.countryCode = countryCode;
    this.stateCode = stateCode;
    this.provinceCode = provinceCode;
    this.zip = zip;
    this.address = address;
    this.userEmail = userEmail;
  }
}
