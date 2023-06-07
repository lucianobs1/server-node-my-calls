import { Prisma, Technician } from '@prisma/client';

export interface IAdministratorsRepository {
  create(data: Prisma.AdministratorUncheckedCreateInput): Promise<Technician>;
}
