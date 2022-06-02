import { ApiProperty } from '@nestjs/swagger';

export class UserPhoneDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  countryCode: string;

  @ApiProperty()
  phone: string;

}
