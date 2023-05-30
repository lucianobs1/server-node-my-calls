import { Call, Prisma } from '@prisma/client';

export interface ICallsRepository {
  create(data: Prisma.CallUncheckedCreateInput): Promise<Call>;
  list(): Promise<Call[]>;
  show(call_id: string): Promise<Call | null>;
}
