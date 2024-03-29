import { prisma } from '@/lib/prisma';
import { Prisma, Technician } from '@prisma/client';
import { ITechniciansRepository } from '../ITechniciansRepository';

export class TechniciansRepository implements ITechniciansRepository {
  async list(): Promise<Technician[]> {
    const technicians = await prisma.technician.findMany();

    return technicians;
  }

  async create(
    data: Prisma.TechnicianUncheckedCreateInput
  ): Promise<Technician> {
    const technician = await prisma.technician.create({
      data,
    });

    return technician;
  }
}
