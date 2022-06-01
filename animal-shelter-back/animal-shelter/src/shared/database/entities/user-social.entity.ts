import { User } from './user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('users-social')
export class UserSocial extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user: User) => user.social)
  user: User;

  @Column()
  name: string;

  @Column()
  url: string;
}