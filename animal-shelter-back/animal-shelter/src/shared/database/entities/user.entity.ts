import { Adoption } from './adoption.entity';
import { UserAddress } from './user-address.entity';
import { UserPhone } from './user-phone.entity';
import { UserSocial } from './user-social.entity';
import { Column, Entity, PrimaryColumn, OneToMany, BaseEntity } from 'typeorm';
import { Role } from './role.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryColumn()
  email: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  avatar: string;

  @OneToMany(() => UserSocial, (social) => social.user, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  social: UserSocial[];

  @OneToMany(() => UserAddress, (address) => address.user, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  address: UserAddress[];

  @OneToMany(() => UserPhone, (phone) => phone.user, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  phone: UserPhone[];

  @OneToMany(() => Role, (userRole) => userRole.user, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  role: Role[];

  @OneToMany(() => Adoption, (adoption) => adoption.userEmail)
  adiptions: Adoption[];
}
