import { Information, Prisma } from '@prisma/client';

export interface IInformationsRepository {
  create(data: Prisma.InformationUncheckedCreateInput): Promise<Information>;
  list(call_id: string): Promise<Information[]>;
}
