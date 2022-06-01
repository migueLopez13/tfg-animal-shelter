import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AddressService],
})
export class AppModule { }
