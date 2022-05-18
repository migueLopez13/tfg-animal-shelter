import { UserEntity } from '../../user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users-phone')
export class UserPhoneEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.phone)
  user: UserEntity;

  @Column()
  countryCode: string;

  @Column()
  phone: string;

  constructor(id: string, countryCode: string, phone: string) {
    this.id = id;
    this.countryCode = countryCode;
    this.phone = phone;
  }
}
