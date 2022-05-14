import { RoleEntity } from 'src/modules/role/entities/role.entity';
import { UserAddressEntity } from 'src/modules/user-address/entities/user-address.entity';
import { UserPhoneEntity } from 'src/modules/user-phone/entities/user-phone.entity';
import { UserSocialEntity } from 'src/modules/user-social/entities/user-social.entity';
import { Column, Entity, PrimaryColumn, OneToMany, JoinTable } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  email: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  avatar: string;

  @OneToMany(() => UserSocialEntity, (social) => social.userEmail, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  social: UserSocialEntity[];

  @OneToMany(() => UserAddressEntity, (address) => address.userEmail, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  address: UserAddressEntity[];

  @OneToMany(() => UserPhoneEntity, (phone) => phone.userEmail, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  phone: UserPhoneEntity[];

  @OneToMany(() => RoleEntity, (userRole) => userRole.userEmail, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  role: RoleEntity[];

  constructor(email: string, name: string, surname: string, avatar: string) {
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.avatar = avatar;
  }
}
