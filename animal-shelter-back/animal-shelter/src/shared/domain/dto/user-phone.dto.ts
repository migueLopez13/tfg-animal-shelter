import { ApiProperty } from '@nestjs/swagger';

export class UserPhoneDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userEmail: string;

  @ApiProperty()
  countryCode: string;

  @ApiProperty()
  label: string;

  @ApiProperty()
  phone: string;

}
