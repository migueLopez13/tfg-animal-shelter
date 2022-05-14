import { UserAddressEntity } from 'src/modules/user_address/entities/user_address.entity';
import { UserPhoneEntity } from 'src/modules/user_phone/entities/user_phone.entity';
import { UserRoleEntity } from 'src/modules/user_role/entities/user_role.entity';
import { UserSocialEntity } from 'src/modules/user_social/entities/user_social.entity';
import {
  Column,
  Entity,
  OneToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  avatar: string;

  @OneToMany(() => UserSocialEntity, (social) => social.user)
  @JoinTable()
  social: UserSocialEntity[];

  @OneToMany(() => UserAddressEntity, (address) => address.user)
  @JoinTable()
  address: UserAddressEntity[];

  @OneToMany(() => UserPhoneEntity, (phone) => phone.user)
  @JoinTable()
  phone: UserPhoneEntity[];

  @OneToMany(() => UserRoleEntity, (userRole) => userRole.user)
  @JoinTable()
  role: UserRoleEntity[];

  constructor(
    id: string,
    email: string,
    name: string,
    surname: string,
    avatar: string,
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.avatar = avatar;
  }
}
