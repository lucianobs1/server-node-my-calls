import { ITechniciansRepository } from '@/repositories/ITechniciansRepository';

export class ListTechniciansUseCase {
  constructor(private techniciansRepository: ITechniciansRepository) {}

  async execute() {
    const technicians = await this.techniciansRepository.list();
    return {
      technicians,
    };
  }
}
