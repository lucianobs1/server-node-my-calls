import { CallsRepository } from '../../../repositories/prisma/CallsRepository';
import { CloseCallUseCase } from '../closeCall/CloseCallUseCase';

export function makeCloseCallUseCase() {
  const callsRepository = new CallsRepository();
  const useCase = new CloseCallUseCase(callsRepository);

  return useCase;
}
