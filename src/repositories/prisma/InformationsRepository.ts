import { Information, Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma';

export class InformationsRepository implements InformationsRepository {
  async create(
    data: Prisma.InformationUncheckedCreateInput
  ): Promise<Information> {
    const information = await prisma.information.create({
      data,
    });

    return information;
  }
}
