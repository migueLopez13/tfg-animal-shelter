import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('cities')
export class Cities extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  state_id: string;

  @Column()
  state_code: string;

  @Column()
  country_id: string;

  @Column()
  country_code: string;

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