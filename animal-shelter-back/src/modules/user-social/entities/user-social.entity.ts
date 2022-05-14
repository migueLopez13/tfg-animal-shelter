import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users_social')
export class UserSocialEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.social)
  @Column()
  userEmail: string;

  @Column()
  name: string;

  @Column()
  url: string;

  constructor(id: string, name: string, url: string, userEmail: string) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.userEmail = userEmail;
  }
}
