import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { config } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCredential } from 'src/shared/database/entities/user-credentials.entity';
import { CredentialService } from './services/credentials.service';
import { JwtStrategy } from 'src/common/strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
config()

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([UserCredential]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, CredentialService, JwtStrategy],
})
export class AuthModule { }
