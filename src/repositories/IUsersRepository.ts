import { Prisma, User } from '@prisma/client';

export interface IUsersRepository {
  create(user: Prisma.UserUncheckedCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  list(): Promise<User[]>;
}
