import { InformationsRepository } from '@/repositories/prisma/InformationsRepository';
import { CreateInformationUseCase } from '../createInfo/CreateInformationUSeCase';

export function makeCreateInformationUseCase() {
  const informationsRepository = new InformationsRepository();
  const useCase = new CreateInformationUseCase(informationsRepository);

  return useCase;
}
