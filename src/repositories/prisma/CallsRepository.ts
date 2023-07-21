import { Call, Prisma } from '@prisma/client';
import { ICallsRepository, ISummaryCallPerMonth } from '../ICallsRepository';
import { prisma } from '../../lib/prisma';

export class CallsRepository implements ICallsRepository {
  async countAllPerMonth(): Promise<ISummaryCallPerMonth> {
    const callsPerMonth = (await prisma.$queryRaw`
      SELECT
      -- STRFTIME("%m-%Y",DATETIME(created_at/1000.0, 'unixepoch', 'localtime')) as date,
      cast(STRFTIME("%Y", created_at/1000.0, 'unixepoch') as float) as year,
      cast(STRFTIME("%m-%Y", created_at/1000.0, 'unixepoch') as float) as month,
        cast(COUNT(created_at) as float) as quantity
      FROM CALL
      GROUP BY STRFTIME("%m-%Y",DATETIME(created_at/1000.0, 'unixepoch', 'localtime'))
    `) as ISummaryCallPerMonth;

    return callsPerMonth;
  }

  async countAllOpen(): Promise<number> {
    const openCalls = await prisma.call.count({
      where: { isOpen: true },
    });

    return openCalls;
  }

  async countAll(): Promise<number> {
    const allCalls = await prisma.call.count();

    return allCalls;
  }

  async countAllClosed(): Promise<number> {
    const closedCalls = await prisma.call.count({
      where: { isOpen: false },
    });

    return closedCalls;
  }

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
