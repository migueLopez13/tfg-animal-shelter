import { ApiProperty } from '@nestjs/swagger';

export class UserPhoneDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  countryCode: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  userEmail: string;

  constructor(
    id: string,
    countryCode: string,
    phone: string,
    userEmail: string,
  ) {
    this.id = id;
    this.countryCode = countryCode;
    this.phone = phone;
    this.userEmail = userEmail;
  }
}
