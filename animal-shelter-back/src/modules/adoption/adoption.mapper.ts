import { AdoptionDTO } from 'src/shared/domain/dto/adoption.dto';
import { AdoptionEntity } from './entities/adoption.entity';

export class AdoptionsMapper {
  async dtoToEntity(adoption: AdoptionDTO): Promise<AdoptionEntity> {
    const adoptionEntity = new AdoptionEntity();
    adoptionEntity.animal.id = adoption.animal.id;
    adoptionEntity.user.id = adoption.user.id;
    return adoptionEntity;
  }

  async entityToDto(adoption: AdoptionEntity): Promise<AdoptionDTO> {
    return {
      id: adoption.id,
      user: adoption.user,
      animal: adoption.animal,
      date: adoption.createdAt,
    };
  }
}
