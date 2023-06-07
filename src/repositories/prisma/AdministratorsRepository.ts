import { Prisma, Technician } from '@prisma/client';
import { ITechniciansRepository } from '../ITechniciansRepository';
import { prisma } from '../../lib/prisma';

export class AdministratorsRepository implements ITechniciansRepository {
  async create(
    data: Prisma.TechnicianUncheckedCreateInput
  ): Promise<Technician> {
    const administrator = await prisma.technician.create({
      data,
    });

    return administrator;
  }
}
