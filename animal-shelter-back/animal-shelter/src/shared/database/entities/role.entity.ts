
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import { User } from './user.entity';

@Entity('role')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user: User) => user.role)
  user: User;

  @Column()
  name: string;

}
