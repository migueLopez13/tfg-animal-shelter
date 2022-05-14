import { RoleDTO } from 'src/shared/domain/dto/role.dto';
import { RoleEntity } from './entities/role.entity';

export class RolesMapper {
  constructor() {}

  dtoToEntity({ id, name }: RoleDTO): RoleEntity {
    return new RoleEntity(id, name);
  }

  entityToDto({ id, name }: RoleEntity): RoleDTO {
    return new RoleDTO(id, name);
  }
}
