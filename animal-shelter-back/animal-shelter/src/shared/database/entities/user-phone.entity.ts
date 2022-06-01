import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { User } from './user.entity';

@Entity('users-phone')
export class UserPhone extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user: User) => user.phone)
  user: User;

  @Column()
  countryCode: string;

  @Column()
  phone: string;
}