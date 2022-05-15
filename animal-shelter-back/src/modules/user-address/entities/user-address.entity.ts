import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users-address')
export class UserAddressEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.address)
  user: UserEntity;

  @Column()
  countryCode: string;

  @Column()
  stateCode: string;

  @Column()
  provinceCode: string;

  @Column()
  zip: string;

  @Column()
  address: string;

  constructor(
    id: string,
    countryCode: string,
    stateCode: string,
    provinceCode: string,
    zip: string,
    address: string,
  ) {
    this.id = id;
    this.countryCode = countryCode;
    this.stateCode = stateCode;
    this.provinceCode = provinceCode;
    this.zip = zip;
    this.address = address;
  }
}
