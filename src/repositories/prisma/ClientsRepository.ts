import { prisma } from '@/lib/prisma';
import { Client, Prisma } from '@prisma/client';
import { IClientsRepository } from '../IClientsRepository';

export class ClientsRepository implements IClientsRepository {
  async list(): Promise<Client[]> {
    const clients = await prisma.client.findMany({
      include: {
        calls: true,
      },
    });

    return clients;
  }

  async findByEmail(email: string): Promise<Client | null> {
    const client = await prisma.client.findUnique({
      where: {
        email,
      },
    });

    return client;
  }

  async create(data: Prisma.ClientUncheckedCreateInput): Promise<Client> {
    const client = await prisma.client.create({
      data,
    });

    return client;
  }
}
