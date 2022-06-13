import { Injectable } from "@nestjs/common";
import { UserPhone } from "src/shared/database/entities/user-phone.entity";
import { UserPhoneDTO } from "src/shared/domain/dto/user-phone.dto";


@Injectable()
export class UserPhoneMapper {

  dtoToEntity({ userEmail, countryCode, phone, id, label }: UserPhoneDTO): UserPhone {
    const entity = new UserPhone;
    entity.id = id
    entity.countryCode = countryCode
    entity.phone = phone
    entity.label = label
    entity.userEmail = userEmail
    return entity
  }

  entityToDto({ id, userEmail, label, countryCode, phone }: UserPhone): UserPhoneDTO {
    const dto: UserPhoneDTO = {
      id, userEmail, label, countryCode, phone
    }
    return dto
  }
}