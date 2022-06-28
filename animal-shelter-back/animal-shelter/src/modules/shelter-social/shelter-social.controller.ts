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
import { ShelterSocialDTO } from '../../shared/domain/dto/shelter-social.dto';
import { ShelterSocialService } from './shelter-social.service';

@ApiTags('shelter-social')
@Controller('shelter-social')
export class ShelterSocialController {
  constructor(private readonly socialService: ShelterSocialService) {}

  @Get()
  private find() {
    return this.socialService.find();
  }

  @Get(':id')
  private findOne(@Param('id') params) {
    return this.socialService.findOne(params);
  }

  @Post()
  private insert(@Body(ValidationPipe) social: ShelterSocialDTO) {
    return this.socialService.insert(social);
  }

  @Put()
  private update(@Body(ValidationPipe) social: ShelterSocialDTO) {
    return this.socialService.update(social);
  }

  @Delete(':id')
  private delete(@Param('id') params) {
    return this.socialService.delete(params);
  }
}
