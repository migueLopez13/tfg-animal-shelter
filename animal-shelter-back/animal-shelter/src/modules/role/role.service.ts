import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from './entities/role.entity';
import { RoleDTO } from '../../shared/domain/dto/role.dto';
import { RolesMapper } from './role.mapper';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly rolesRepository: Repository<RoleEntity>,
    private readonly mapper: RolesMapper,
  ) {}

  find = () => this.rolesRepository.find();

  findOne = (id: string) => this.rolesRepository.findOne(id);

  insert = async (role: RoleDTO) => {
    return this.rolesRepository.insert(role);
  };

  update = async (role: RoleDTO) =>
    this.rolesRepository.update(role.id, this.mapper.dtoToEntity(role));

  delete = async (id: string) => this.rolesRepository.delete(id);
}
