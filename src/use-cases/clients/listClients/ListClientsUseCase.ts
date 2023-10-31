import { IClientsRepository } from '@/repositories/IClientsRepository';

export class ListClientsUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async execute() {
    const clients = await this.clientsRepository.list();

    return {
      clients,
    };
  }
}
