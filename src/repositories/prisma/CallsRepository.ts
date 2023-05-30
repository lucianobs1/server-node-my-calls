import { Call, Prisma } from '@prisma/client';
import { ICallsRepository } from '../ICallsRepository';
import { prisma } from '../../lib/prisma';

export class CallsRepository implements ICallsRepository {
  async create(data: Prisma.CallUncheckedCreateInput): Promise<Call> {
    const call = await prisma.call.create({
      data,
    });

    return call;
  }
}
