import { InformationsRepository } from '@/repositories/prisma/InformationsRepository';
import { ListInformationsUseCase } from '../listInfo/ListInformationsUseCase';

export function makeListInformationsUseCase() {
  const informationsRepository = new InformationsRepository();
  const useCase = new ListInformationsUseCase(informationsRepository);

  return useCase;
}
