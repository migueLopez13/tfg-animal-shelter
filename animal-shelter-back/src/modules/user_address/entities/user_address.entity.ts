import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users_address')
export class UserAddressEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.address)
  user: UserEntity;

  @Column()
  country_code: string;

  @Column()
  state_code: string;

  @Column()
  province_code: string;

  @Column()
  zip: string;

  @Column()
  address: string;

  constructor(
    id: string,
    user: UserEntity,
    countryCode: string,
    stateCode: string,
    provinceCode: string,
    zip: string,
    address: string,
  ) {
    this.id = id;
    this.user = user;
    this.country_code = countryCode;
    this.state_code = stateCode;
    this.province_code = provinceCode;
    this.zip = zip;
    this.address = address;
  }
}
