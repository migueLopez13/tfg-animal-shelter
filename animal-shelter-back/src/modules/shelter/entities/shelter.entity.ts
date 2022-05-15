import { ShelterMediaEntity } from 'src/modules/shelter-media/entities/shelter-media.entity';
import { ShelterSocialEntity } from 'src/modules/shelter-social/entities/shelter-social.entity';
import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';

@Entity('shelters')
export class ShelterEntity {
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

  @OneToMany(() => ShelterMediaEntity, (media) => media.shelter, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  media: ShelterMediaEntity[];

  @OneToMany(() => ShelterSocialEntity, (social) => social.shelter, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  social: ShelterSocialEntity[];

  constructor(
    email: string,
    name: string,
    description: string,
    countryCode: string,
    stateCode: string,
    zip: string,
    address: string,
    media: ShelterMediaEntity[],
    social: ShelterSocialEntity[],
  ) {
    this.email = email;
    this.name = name;
    this.description = description;
    this.countryCode = countryCode;
    this.stateCode = stateCode;
    this.zip = zip;
    this.address = address;
    this.media = media;
    this.social = social;
  }
}
