import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/shared/database/entities/role.entity';
import { RoleDTO } from 'src/shared/domain/dto/role.dto';
import { UserCredential } from 'src/shared/database/entities/user-credentials.entity';
import { User } from 'src/shared/database/entities/user.entity';

@Injectable()
export class CredentialService {
  constructor(
    @InjectRepository(UserCredential)
    private readonly credentials: Repository<UserCredential>,
  ) { }

  findOne = (user: User) => this.credentials.findOne({ user });

  update = async (credential: UserCredential) =>
    this.credentials.update(credential.id, credential);

  delete = async (id: string) => this.credentials.delete(id);
}