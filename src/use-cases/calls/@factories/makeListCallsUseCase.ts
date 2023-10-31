import { CallsRepository } from '@/repositories/prisma/CallsRepository';
import { ListCallUseCase } from '../listCalls/ListCallsUseCase';

export function makeListCallsUseCase() {
  const callsRepository = new CallsRepository();
  const useCase = new ListCallUseCase(callsRepository);

  return useCase;
}
