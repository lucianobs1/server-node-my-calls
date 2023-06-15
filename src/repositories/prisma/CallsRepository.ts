import { Call, Prisma } from '@prisma/client';
import { ICallsRepository } from '../ICallsRepository';
import { prisma } from '../../lib/prisma';

export class CallsRepository implements ICallsRepository {
  async update(call_id: string): Promise<Call> {
    const call = await prisma.call.update({
      where: {
        id: call_id,
      },
      data: {
        isOpen: false,
      },
    });

    return call;
  }

  async findById(call_id: string): Promise<Call> {
    const call = await prisma.call.findFirstOrThrow({
      where: {
        id: call_id,
        isOpen: true,
      },
      include: {
        technician: true,
        client: true,
        informations: true,
      },
    });

    return call;
  }

  async list(): Promise<Call[]> {
    const calls = await prisma.call.findMany({
      where: {
        isOpen: true,
      },

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
