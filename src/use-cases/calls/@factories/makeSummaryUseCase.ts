import { CallsRepository } from '../../../repositories/prisma/CallsRepository';
import { SummaryUseCase } from '../summary/SummaryUseCase';

export function makeSummaryUseCase() {
  const callsRepository = new CallsRepository();
  const useCase = new SummaryUseCase(callsRepository);

  return useCase;
}
