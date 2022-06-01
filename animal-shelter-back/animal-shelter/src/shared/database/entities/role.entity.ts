
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, BaseEntity } from 'typeorm';
import { User } from './user.entity';

@Entity('role')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToMany(() => User, (user: User) => user.role)
  user: User;

  @Column()
  name: string;

}
