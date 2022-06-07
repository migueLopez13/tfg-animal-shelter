import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO } from 'src/shared/domain/dto/login.dto';
import { AuthService } from './services/auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login/user')
  async loginUser(@Body() login: LoginDTO): Promise<{ access_token: string }> {
    const { email, password } = login;
    const valid = await this.authService.validateUser(email, password);
    if (!valid) {
      throw new UnauthorizedException();
    }
    return await this.authService.generateUserToken(email);
  }

  @Post('login/shelter')
  async loginshelter(@Body() login: LoginDTO) {
    //TODO
  }
}