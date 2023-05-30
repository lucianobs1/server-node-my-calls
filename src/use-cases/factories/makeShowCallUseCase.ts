import { CallsRepository } from '../../repositories/prisma/CallsRepository';
import { ShowCallUseCase } from '../showCall/ShowCallUseCase';

export function makeShowCallUseCase() {
  const callsRepository = new CallsRepository();
  const useCase = new ShowCallUseCase(callsRepository);

  return useCase;
}
