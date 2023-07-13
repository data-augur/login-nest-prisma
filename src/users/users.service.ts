import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async findOne(email: string): Promise<any | undefined> {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}
