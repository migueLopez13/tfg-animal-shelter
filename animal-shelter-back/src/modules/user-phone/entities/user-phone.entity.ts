import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users_phone')
export class UserPhoneEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.phone)
  @Column()
  userEmail: string;

  @Column()
  countryCode: string;

  @Column()
  phone: string;

  constructor(
    id: string,
    countryCode: string,
    phone: string,
    userEmail: string,
  ) {
    this.id = id;
    this.countryCode = countryCode;
    this.phone = phone;
    this.userEmail = userEmail;
  }
}
