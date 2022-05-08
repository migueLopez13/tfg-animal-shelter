import { AnimalDTO } from "src/shared/domain/dto/animal.dto";
import { AnimalsService } from "./animals.service";
import { AnimalEntity } from "./entities/animal.entity";

export class AnimalsMapper {
  constructor(private readonly animalsService: AnimalsService) {}

  async dtoToEntity(animal: AnimalDTO): Promise<AnimalEntity> {
    const newEntity = new AnimalEntity();

    newEntity.id = animal.id
    newEntity.name = animal.name
    newEntity.birthdate = animal.birthdate
    newEntity.gender = animal.gender
    newEntity.species = animal.species
    newEntity.breed = animal.breed
    newEntity.size = animal.size
    newEntity.dewormed = animal.dewormed
    newEntity.arrivalDate = animal.arrivalDate
    
    return newEntity;
  }

  async entityToDto(animal: AnimalEntity): Promise<AnimalDTO> {

    return {
      id: animal.id,
      name: animal.name,
      birthdate: animal.birthdate,
      gender: animal.gender,
      species: animal.species,
      breed: animal.breed,
      size: animal.size,
      dewormed: animal.dewormed,
      arrivalDate: animal.arrivalDate,
    };
  }
}