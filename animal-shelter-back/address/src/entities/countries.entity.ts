import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('countries')
export class Countries extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  iso3: string;

  @Column()
  numeric_code: string;

  @Column()
  iso2: string;

  @Column()
  phonecode: string;

  @Column()
  region: string;

  @Column()
  subregion: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  emoji: string;

  @Column()
  emojiU: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column()
  flag: string;

  @Column()
  wikiDataId: string;

}

