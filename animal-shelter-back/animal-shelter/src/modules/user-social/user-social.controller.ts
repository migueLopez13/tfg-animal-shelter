import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserSocialDTO } from '../../shared/domain/dto/user-social.dto';
import { UserSocialService } from './user-social.service';

@ApiTags('user-social')
@Controller('user-social')
export class UserSocialController {
  constructor(private readonly socialService: UserSocialService) {}

  @Get()
  private find() {
    return this.socialService.find();
  }

  @Get(':id')
  private findOne(@Param('id') params) {
    return this.socialService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) social: UserSocialDTO) {
    return this.socialService.insert(social);
  }

  @Put()
  private update(@Body(ValidationPipe) social: UserSocialDTO) {
    return this.socialService.update(social);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.socialService.delete(params);
  }
}
