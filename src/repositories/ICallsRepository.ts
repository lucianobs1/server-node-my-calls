import { Call, Prisma } from '@prisma/client';

export interface ICallsRepository {
  create(data: Prisma.CallUncheckedCreateInput): Promise<Call>;
  list(): Promise<Call[]>;
  findById(call_id: string): Promise<Call | null>;
  update(call_id: string): Promise<Call>;
  findAllOpen(): Promise<number>;
  findAllClosed(): Promise<number>;
  findAll(): Promise<number>;
}
