import { ShelterMedia } from './shelter-media.entity';
import { Column, Entity, PrimaryColumn, OneToMany, BaseEntity } from 'typeorm';
import { Animal } from './animal.entity';
import { ShelterSocial } from './shelter-social.entity';

@Entity('shelters')
export class Shelter extends BaseEntity {
  @PrimaryColumn()
  email: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  phone: string;

  @Column()
  countryCode: string;

  @Column()
  provinceCode: string;

  @Column()
  stateCode: string;

  @Column()
  zip: string;

  @Column()
  address: string;

  @Column("decimal")
  longitude: number;

  @Column("decimal")
  latitude: number;

  @OneToMany(() => ShelterMedia, (media) => media.shelter, {
    eager: true,
    cascade: ["insert", "update", "remove"],
    nullable: true
  })
  media: ShelterMedia[];

  @OneToMany(() => ShelterSocial, (social) => social.shelter, {
    eager: true,
    cascade: ["insert", "update", "remove"],
    nullable: true
  })
  social: ShelterSocial[];

  @OneToMany(() => Animal, (animal) => animal.shelter, {
    eager: true,
    cascade: ["insert", "update"]
  })
  animals: Animal[];

}
