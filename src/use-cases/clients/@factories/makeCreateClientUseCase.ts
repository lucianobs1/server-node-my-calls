import { ClientsRepository } from '../../../repositories/prisma/ClientsRepository';
import { CreateClientUseCase } from '../createClient/CreateClientUseCase';

export function makeCreateClientUseCase() {
  const clientsRepository = new ClientsRepository();
  const useCase = new CreateClientUseCase(clientsRepository);
  return useCase;
}
