import { Call, Prisma } from '@prisma/client';
import { ICallsRepository } from '../ICallsRepository';
import { prisma } from '../../lib/prisma';

export class CallsRepository implements ICallsRepository {
  async show(call_id: string): Promise<Call> {
    const call = await prisma.call.findUniqueOrThrow({
      where: {
        id: call_id,
      },
      include: {
        technician: true,
        client: true,
      },
    });

    return call;
  }

  async list(): Promise<Call[]> {
    const calls = await prisma.call.findMany({
      include: {
        technician: true,
        client: true,
      },
    });

    return calls;
  }

  async create(data: Prisma.CallUncheckedCreateInput): Promise<Call> {
    const call = await prisma.call.create({
      data,
    });

    return call;
  }
}
