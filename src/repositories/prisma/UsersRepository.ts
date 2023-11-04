import { Prisma } from '@prisma/client';
import { IUsersRepository } from '../IUsersRepository';
import { prisma } from '@/lib/prisma';

export class UsersRepository implements IUsersRepository {
  async list() {
    const users = await prisma.user.findMany();
    return users;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    return user;
  }

  async create({
    name,
    email,
    password_hash,
  }: Prisma.UserUncheckedCreateInput) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
      },
    });

    return user;
  }
}
