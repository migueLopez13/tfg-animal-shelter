import { RoleDTO } from 'src/shared/domain/dto/role.dto';
import { RoleEntity } from './entities/role.entity';

export class RolesMapper {
  constructor() {}
  dtoToEntity({ id, name, userEmail }: RoleDTO): RoleEntity {
    return new RoleEntity(id, name, userEmail);
  }

  entityToDto({ id, name, userEmail }: RoleEntity): RoleDTO {
    return new RoleDTO(id, name, userEmail);
  }
}
