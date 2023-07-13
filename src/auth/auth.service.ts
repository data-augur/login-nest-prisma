import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email, pass) {
    const user = await this.usersService.findOne(email);
    if (user) {
      const isMatch = await bcrypt.compare(pass, user?.password);
      if (!isMatch) {
        throw new UnauthorizedException();
      }
      const payload = { sub: user.id, username: user.email };
      return {
        is_success: true,
        data: {
          auth: {
            email: user.email,
            tokem: await this.jwtService.signAsync(payload),
          },
        },
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}
