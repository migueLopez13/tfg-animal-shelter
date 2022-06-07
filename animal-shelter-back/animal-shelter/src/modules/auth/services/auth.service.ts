import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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

  async validateShelter(email: string, pass: string) {
    //TODO
  }

  async generateUserToken(email: string) {
    const user = await this.usersService.findOne(email);
    const payload: JWTPayload = { email, name: user.name, roles: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async generateShelterToken(email: string) {
    //TODO
  }
}