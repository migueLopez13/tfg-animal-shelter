import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { config } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCredential } from 'src/shared/database/entities/user-credentials.entity';
import { CredentialService } from './services/credentials.service';
config()

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([UserCredential]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, CredentialService],
})
export class AuthModule { }
