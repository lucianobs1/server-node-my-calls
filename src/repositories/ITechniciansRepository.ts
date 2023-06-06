import { Prisma, Technician } from '@prisma/client';

export interface ITechniciansRepository {
  create(data: Prisma.TechnicianUncheckedCreateInput): Promise<Technician>;
}
