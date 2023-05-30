import { CallsRepository } from '../../repositories/prisma/CallsRepository';
import { CreateCallUseCase } from '../createCall/CreateCallUseCase';

export function makeCreateCallUseCase() {
  const callsRepository = new CallsRepository();
  const useCase = new CreateCallUseCase(callsRepository);

  return useCase;
}
