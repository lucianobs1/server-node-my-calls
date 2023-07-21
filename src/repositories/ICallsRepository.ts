import { Call, Prisma } from '@prisma/client';

export interface ISummaryCallPerMonth {
  year: number;
  month: number;
  quantity: number;
}

export interface ICallsRepository {
  create(data: Prisma.CallUncheckedCreateInput): Promise<Call>;
  list(): Promise<Call[]>;
  findById(call_id: string): Promise<Call | null>;
  update(call_id: string): Promise<Call>;
  countAllOpen(): Promise<number>;
  countAllClosed(): Promise<number>;
  countAll(): Promise<number>;
  countAllPerMonth(): Promise<ISummaryCallPerMonth>;
}
