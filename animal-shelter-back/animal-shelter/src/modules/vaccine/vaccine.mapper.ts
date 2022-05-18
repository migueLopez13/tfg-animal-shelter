import { VaccineDTO } from '../../shared/domain/dto/vaccine.dto';
import { VaccineEntity } from './entities/vaccine.entity';

export class VaccineMapper {
  constructor() {}

  dtoToEntity({ id, name }: VaccineDTO): VaccineEntity {
    return new VaccineEntity(id, name);
  }

  entityToDto({ id, name }: VaccineEntity): VaccineDTO {
    return new VaccineDTO(id, name);
  }
}
