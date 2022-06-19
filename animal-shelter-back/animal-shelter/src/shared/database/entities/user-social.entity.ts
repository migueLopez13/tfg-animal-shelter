import { User } from './user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('users-social')
export class UserSocial extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user: User) => user.social, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  user: User;

  @Column()
  userEmail: string;

  @Column()
  name: string;

  @Column()
  url: string;
}
