import { TechniciansRepository } from '../../../repositories/prisma/TechniciansRepository';
import { CreateTechnicianUseCase } from '../createTechnician/CreateTechnicianUseCase';

export function makeCreateTechnicianUseCase() {
  const techniciansRepository = new TechniciansRepository();
  const useCase = new CreateTechnicianUseCase(techniciansRepository);

  return useCase;
}
