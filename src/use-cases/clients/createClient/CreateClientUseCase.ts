import { IClientsRepository } from '@/repositories/IClientsRepository';

interface IClientRequest {
  condominium_name: string;
  administrator_name: string;
  email: string;
}

export class CreateClientUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async execute({
    condominium_name,
    administrator_name,
    email,
  }: IClientRequest) {
    const hasClient = await this.clientsRepository.findByEmail(email);

    if (hasClient) {
      throw new Error('client already exists');
    }

    const client = await this.clientsRepository.create({
      condominium_name,
      administrator_name,
      email,
    });

    return {
      client,
    };
  }
}
