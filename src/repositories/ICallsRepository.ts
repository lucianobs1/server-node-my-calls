import { Call, Prisma } from '@prisma/client';

export interface ICallsRepository {
  create(data: Prisma.CallUncheckedCreateInput): Promise<Call>;
  list(): Promise<Call[]>;
}
