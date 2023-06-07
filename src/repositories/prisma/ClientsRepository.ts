import { Client, Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { IClientsRepository } from '../IClientsRepository';

export class ClientsRepository implements IClientsRepository {
  async list(): Promise<Client[]> {
    const clients = await prisma.client.findMany({
      include: {
        call: true,
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
