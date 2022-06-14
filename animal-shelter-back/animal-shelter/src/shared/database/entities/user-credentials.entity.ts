import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, BaseEntity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';

@Entity('user-credential')
export class UserCredential extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user: User) => user.password)
  user: User;

  @Column({ unique: true })
  userEmail: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  validatePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}