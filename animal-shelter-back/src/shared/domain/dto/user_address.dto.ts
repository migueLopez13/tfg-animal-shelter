import { ApiProperty } from '@nestjs/swagger';

export class UserAddressDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userEmail: string;

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

  constructor(
    id: string,
    userEmail: string,
    countryCode: string,
    stateCode: string,
    provinceCode: string,
    zip: string,
    address: string,
  ) {
    this.id = id;
    this.userEmail = userEmail;
    this.countryCode = countryCode;
    this.stateCode = stateCode;
    this.provinceCode = provinceCode;
    this.zip = zip;
    this.address = address;
  }
}
