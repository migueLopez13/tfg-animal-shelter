import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { UserDTO } from '../../shared/domain/dto/user.dto';
import { UsersService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Auth } from 'src/common/decorators/auth.decorator';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  private find(@Auth() { role }: UserDTO) {
    if (role.some((role) => role.name === 'admin'))
      return this.usersService.find();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  private findOne(@Auth() { email }: UserDTO) {
    return this.usersService.findOne(email);
  }

  @Post()
  private insert(@Body(ValidationPipe) user: UserDTO) {
    return this.usersService.insert(user);
  }

  @Put()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  private update(
    @Body(ValidationPipe) user: UserDTO, @Auth() { email, role }: UserDTO
  ) {
    if (user.email === email || role.some((role) => role.name === 'admin'))
      return this.usersService.update(user);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  private delete(@Param('email') params, @Auth() { email, role }: UserDTO) {
    if (role.some((role) => role.name === 'admin'))
      return this.usersService.delete(params);
  }
}
