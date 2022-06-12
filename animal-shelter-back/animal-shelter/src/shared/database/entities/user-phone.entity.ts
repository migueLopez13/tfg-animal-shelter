import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { User } from './user.entity';

@Entity('users-phone')
export class UserPhone extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user: User) => user.phone)
  user: User;

  @Column()
  userEmail: string;

  @Column()
  countryCode: string;

  @Column()
  label: string;

  @Column()
  phone: string;
}
