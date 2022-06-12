import { Adoption } from './adoption.entity';
import { UserAddress } from './user-address.entity';
import { UserPhone } from './user-phone.entity';
import { UserSocial } from './user-social.entity';
import { Column, Entity, PrimaryColumn, OneToMany, OneToOne, ManyToMany, JoinTable, BaseEntity, JoinColumn } from 'typeorm';
import { Role } from './role.entity';
import { UserCredential } from './user-credentials.entity';

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
    eager: true,
    cascade: ["insert", "update", "remove"],
  })
  social: UserSocial[];

  @OneToMany(() => UserAddress, (address) => address.user, {
    eager: true,
    cascade: ["insert", "update", "remove"],
  })
  address: UserAddress[];

  @OneToMany(() => UserPhone, (phone) => phone.user, {
    eager: true,
  })
  phone: UserPhone[];

  @ManyToMany(() => Role, (userRole) => userRole.users, {
    eager: true,
    cascade: true
  })
  @JoinTable()
  role: Role[];

  @OneToMany(() => Adoption, (adoption) => adoption.user, {
    eager: true,
  })
  @JoinColumn()
  adoptions: Adoption[];

  @OneToOne(() => UserCredential, (credential) => credential.user, {
    eager: false,
    cascade: ["insert", "update", "remove"],
  })
  password: UserCredential;

}
