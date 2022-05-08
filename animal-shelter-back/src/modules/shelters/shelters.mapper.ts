import { ShelterDTO } from "src/shared/domain/dto/shelter.dto";
import { ShelterEntity } from "./entities/shelter.entity";

export class SheltersMapper {
  constructor() {}

  async dtoToEntity(shelter: ShelterDTO): Promise<ShelterEntity> {

    const newEntity = new ShelterEntity();

    newEntity.id = shelter.id
    newEntity.name = shelter.name
    newEntity.city = shelter.city
    newEntity.postalCode = shelter.postalCode
    newEntity.address = shelter.address
    newEntity.email = shelter.email
    newEntity.phone = shelter.phone
    
    return newEntity;
  }

  async entityToDto(shelter: ShelterEntity): Promise<ShelterDTO> {

    return {
      id: shelter.id,
      name: shelter.name,
      city: shelter.city,
      postalCode: shelter.postalCode,
      address: shelter.address,
      email: shelter.email,
      phone: shelter.phone,
    };
  }
}