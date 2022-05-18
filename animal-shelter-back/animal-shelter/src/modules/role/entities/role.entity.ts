import { UserEntity } from '../../user/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.role)
  user: UserEntity;

  @Column()
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
