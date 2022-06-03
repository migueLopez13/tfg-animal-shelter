import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('states')
export class States extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country_id: string;

  @Column()
  country_code: string;

  @Column()
  fips_code: string;

  @Column()
  iso2: string;

  @Column()
  type: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column()
  flag: string;

  @Column()
  wikiDataId: string;

}