import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';
import { ChangePasswordRequestDTO } from 'src/shared/domain/dto/change-password-request.dto';
import { json } from 'stream/consumers';
import { UsersService } from '../../user/user.service';
import { JWTPayload } from '../interface/jwt-payload.interface';
import { CredentialService } from './credentials.service';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private credentialService: CredentialService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, pass: string): Promise<boolean> {
    const user = await this.usersService.findOne(email);
    const credential = await this.credentialService.findOne(user)
    return credential.validatePassword(pass);
  }

  async generateUserToken(email: string) {
    const user = await this.usersService.findOne(email);
    const isAdmin = user.role.some((role) => role.name === 'admin')
    const payload: JWTPayload = { email, name: user.name, isAdmin };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async changePassword(email: string, passwords: ChangePasswordRequestDTO) {
    const user = await this.usersService.findOne(email);
    const credential = await this.credentialService.findOne(user)
    if (credential.validatePassword(passwords.oldPassword)) {
      credential.password = passwords.newPassword
      return credential.save()
    }
    else {
      return Error('incorrect password')
    }
  }
}