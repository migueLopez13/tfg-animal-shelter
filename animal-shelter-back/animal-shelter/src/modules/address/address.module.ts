
import { Module } from '@nestjs/common';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ADDRESS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8888,
        },
      },
    ]),
  ],
  controllers: [AddressController],
  providers: [AddressService],
})

export class AddressModule { }
