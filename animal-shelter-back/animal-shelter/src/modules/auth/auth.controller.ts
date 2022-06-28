import { Body, Controller, Param, Post, Put, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator';
import { ChangePasswordRequestDTO } from 'src/shared/domain/dto/change-password-request.dto';
import { LoginDTO } from 'src/shared/domain/dto/login.dto';
import { UserDTO } from 'src/shared/domain/dto/user.dto';
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

  @Put('login/user/:email')
  @UseGuards(AuthGuard('jwt'))
  async changePassword(
    @Body() passwordChangeRequest: ChangePasswordRequestDTO,
    @Auth() { email, role }: UserDTO,
    @Param('email') params
  ): Promise<any> {
    if (email === params || role.some((role) => role.name === 'admin')) {
      return this.authService.changePassword(email, passwordChangeRequest);
    }
    return Error('unhautorized')
  }

}