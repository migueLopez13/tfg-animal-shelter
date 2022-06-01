import {
  Column,
  Entity,
  OneToOne,
  ManyToOne,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinColumn
} from 'typeorm';
import { Animal } from './animal.entity';
import { User } from './user.entity';


@Entity('adoptions')
export class Adoption extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.adoptions)
  user: User;

  @OneToOne(() => Animal, (animal) => animal.adoption)
  @JoinColumn()
  animal: Animal;

  @Column({ type: 'timestamp', nullable: false })
  date: Date;
}
