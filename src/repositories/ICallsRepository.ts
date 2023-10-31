import { Call, Prisma } from '@prisma/client';

export interface ISummaryCallPerMonth {
  year: number;
  month: number;
  monthName: string;
  quantity: number;
}

export type IListSummaryCallPerMonth = ISummaryCallPerMonth[];

export interface ICallsRepository {
  create(data: Prisma.CallUncheckedCreateInput): Promise<Call>;
  list(): Promise<Call[]>;
  findById(call_id: string): Promise<Call | null>;
  update(call_id: string): Promise<Call>;
  countAllOpen(): Promise<number>;
  countAllClosed(): Promise<number>;
  countAll(): Promise<number>;
  countAllPerMonth(): Promise<IListSummaryCallPerMonth>;
}
