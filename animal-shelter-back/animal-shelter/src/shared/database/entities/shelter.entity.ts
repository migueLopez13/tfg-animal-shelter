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
  countryCode: string;

  @Column()
  stateCode: string;

  @Column()
  zip: string;

  @Column()
  address: string;

  @OneToMany(() => ShelterMedia, (media) => media.shelter)
  media: ShelterMedia[];

  @OneToMany(() => ShelterSocial, (social) => social.shelter)
  social: ShelterSocial[];

  @OneToMany(() => Animal, (animal) => animal.shelter)
  animals: Animal[];

}