import { ITechniciansRepository } from '../../../repositories/ITechniciansRepository';

export class ListTechniciansUseCase {
  constructor(private techniciansRepository: ITechniciansRepository) {}

  async execute() {
    const technician = await this.techniciansRepository.list();
    return {
      technician,
    };
  }
}
