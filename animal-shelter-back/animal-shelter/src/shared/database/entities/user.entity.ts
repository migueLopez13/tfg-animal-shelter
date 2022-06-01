import { Adoption } from './adoption.entity';
import { UserAddress } from './user-address.entity';
import { UserPhone } from './user-phone.entity';
import { UserSocial } from './user-social.entity';
import { Column, Entity, PrimaryColumn, OneToMany, ManyToMany, JoinTable, BaseEntity } from 'typeorm';
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

  @OneToMany(() => UserSocial, (social) => social.user)
  social: UserSocial[];

  @OneToMany(() => UserAddress, (address) => address.user)
  address: UserAddress[];

  @OneToMany(() => UserPhone, (phone) => phone.user)
  phone: UserPhone[];

  @ManyToMany(() => Role, (userRole) => userRole.user)
  @JoinTable()
  role: Role[];

  @OneToMany(() => Adoption, (adoption) => adoption.user)
  adoptions: Adoption[];
}
