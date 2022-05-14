import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { UserDTO } from 'src/shared/domain/dto/user.dto';

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;


  @Column()
  address: string;

  @Column()
  postalCode: string;

  @Column()
  description: string;


  constructor() {}
}
