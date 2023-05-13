import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaSerivce: PrismaService) {}

  async createUser(userDto: UserDto) {
    return this.prismaSerivce.user.create({
      data: userDto,
    });
  }
}
