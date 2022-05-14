import { RoleEntity } from 'src/modules/role/entities/role.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users_role')
export class UserRoleEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.role)
  user: UserEntity;

  @ManyToOne(() => RoleEntity, (role: RoleEntity) => role.id)
  role: RoleEntity;
}
