import {
  Column,
  Entity,
  OneToOne,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AnimalEntity } from '../../animal/entities/animal.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Entity('adoptions')
export class AdoptionsEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.email, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  @Column()
  userEmail: string;

  @OneToOne(() => AnimalEntity, (animal) => animal.id, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  @Column()
  animalId: string;

  @Column()
  date: string;

  constructor(id: string, userEmail: string, animalId: string, date: string) {
    this.id = id;
    this.userEmail = userEmail;
    this.animalId = animalId;
    this.date = date;
  }
}
