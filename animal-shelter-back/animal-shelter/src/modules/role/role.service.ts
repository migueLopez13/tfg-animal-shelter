import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/shared/database/entities/role.entity';
import { RoleDTO } from 'src/shared/domain/dto/role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>,
  ) { }

  find = () => this.rolesRepository.find();

  findOne = (id: string) => this.rolesRepository.findOne(id);

  insert = async (role: RoleDTO) => {
    return this.rolesRepository.insert(role);
  };

  update = async (role: RoleDTO) =>
    this.rolesRepository.update(role.id, role);

  delete = async (id: string) => this.rolesRepository.delete(id);
}
