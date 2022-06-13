
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { User } from './user.entity';

@Entity('users-address')
export class UserAddress extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user: User) => user.address)
  user: User;

  @Column()
  userEmail: string;

  @Column()
  countryCode: string;

  @Column()
  stateCode: string;

  @Column()
  province: string;

  @Column()
  label: string;

  @Column()
  zip: string;

  @Column()
  address: string;

}
