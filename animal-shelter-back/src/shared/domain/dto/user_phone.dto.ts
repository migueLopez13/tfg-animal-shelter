import { ApiProperty } from '@nestjs/swagger';

export class UserPhoneDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userEmail: string;

  @ApiProperty()
  countryCode: string;

  @ApiProperty()
  phone: string;

  constructor(
    id: string,
    userEmail: string,
    countryCode: string,
    phone: string,
  ) {
    this.id = id;
    this.userEmail = userEmail;
    this.countryCode = countryCode;
    this.phone = phone;
  }
}
