import { Information, Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { IInformationsRepository } from '../IInformationsRepository';

export class InformationsRepository implements IInformationsRepository {
  async list(call_id: string): Promise<Information[]> {
    const informations = await prisma.information.findMany({
      where: { call_id },
    });

    return informations;
  }

  async create(
    data: Prisma.InformationUncheckedCreateInput
  ): Promise<Information> {
    const information = await prisma.information.create({
      data,
    });

    return information;
  }
}
