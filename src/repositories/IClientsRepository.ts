import { Client, Prisma } from '@prisma/client';

export interface IClientsRepository {
  create(data: Prisma.ClientUncheckedCreateInput): Promise<Client>;
  findByEmail(email: string): Promise<Client | null>;
  list(): Promise<Client[]>;
}
