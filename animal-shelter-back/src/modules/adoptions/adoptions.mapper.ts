
import { AdoptionDTO } from 'src/shared/domain/dto/adoption.dto';
import { AnimalsService } from '../animals/animals.service';
import { UsersService } from '../users/users.service';
import { AdoptionsService } from './adoptions.service';
import { AdoptionEntity } from './entities/adoption.entity';


export class AdoptionsMapper {
  constructor(
    private readonly usersService: UsersService,
    private readonly animalsService: AnimalsService,
  ) { }

  async dtoToEntity(adoption: AdoptionDTO): Promise<AdoptionEntity> {
    const newEntity = new AdoptionEntity()

    newEntity.userId = adoption.user.id
    newEntity.animalId = adoption.animal.id
    newEntity.shelterId = adoption.shelterId

    return newEntity;
  }

  async entityToDto(adoption: AdoptionEntity): Promise<AdoptionDTO> {

    const animal = await this.animalsService.findOne(adoption.animalId);
    const user = await this.usersService.findOne(adoption.userId);

    return {
      id: adoption.id,
      user,
      animal,
      shelterId: adoption.shelterId,
      date: adoption.createdAt,
    } ;
  }
}