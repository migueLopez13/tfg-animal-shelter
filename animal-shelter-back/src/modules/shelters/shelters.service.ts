import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ShelterDTO } from 'src/shared/domain/dto/shelter.dto';
import { ShelterEntity } from './entities/shelter.entity';
import { SheltersMapper } from './shelters.mapper';

@Injectable()
export class SheltersService {
  constructor(
    @InjectRepository(ShelterEntity)
    private readonly shelterRepository: Repository<ShelterEntity>,
    private readonly mapper: SheltersMapper,
  ) { }

  find = async () => this.shelterRepository.find();

  findOne = async (id: string) => this.mapper.entityToDto(
    await this.shelterRepository.findOne(id)
    );

  insert = async (shelter: ShelterDTO) =>
    this.shelterRepository.insert(await this.mapper.dtoToEntity(shelter));

  update = async (shelter: ShelterDTO) =>
    this.shelterRepository.update(
      shelter.id,
      await this.mapper.dtoToEntity(shelter),
    );

  delete = (id: string) => this.shelterRepository.delete(id);
}
