import { UserEntity } from '../../user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users-social')
export class UserSocialEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.social)
  user: UserEntity;

  @Column()
  name: string;

  @Column()
  url: string;

  constructor(id: string, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}
