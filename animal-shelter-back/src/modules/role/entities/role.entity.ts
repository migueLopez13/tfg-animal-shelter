import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.role)
  @Column()
  userEmail: string;

  @Column()
  name: string;

  constructor(id: string, name: string, userEmail: string) {
    this.id = id;
    this.name = name;
    this.userEmail = userEmail;
  }
}
