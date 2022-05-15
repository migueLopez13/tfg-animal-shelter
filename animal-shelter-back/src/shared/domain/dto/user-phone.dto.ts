import { ApiProperty } from '@nestjs/swagger';

export class UserPhoneDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  countryCode: string;

  @ApiProperty()
  phone: string;

  constructor(id: string, countryCode: string, phone: string) {
    this.id = id;
    this.countryCode = countryCode;
    this.phone = phone;
  }
}
