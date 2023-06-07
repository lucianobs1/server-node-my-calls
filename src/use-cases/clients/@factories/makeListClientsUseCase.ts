import { ClientsRepository } from '../../../repositories/prisma/ClientsRepository';
import { ListClientsUseCase } from '../listClients/ListClientsUseCase';

export function makeListClientsUseCase() {
  const clientsRepository = new ClientsRepository();
  const useCase = new ListClientsUseCase(clientsRepository);
  return useCase;
}
