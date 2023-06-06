import { ITechniciansRepository } from '../../../repositories/ITechniciansRepository';

interface ICreateTechnicianRequest {
  name: string;
}

export class CreateTechnicianUseCase {
  constructor(private techniciansRepository: ITechniciansRepository) {}

  async execute({ name }: ICreateTechnicianRequest) {
    const technician = await this.techniciansRepository.create({
      name,
    });

    return technician;
  }
}
