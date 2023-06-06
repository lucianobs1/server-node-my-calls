import { TechniciansRepository } from '../../../repositories/prisma/TechniciansRepository';
import { CreateTechnicianUseCase } from '../createTechnician/CreateTechnicianUseCase';

export function makeTechnician() {
  const techniciansRepository = new TechniciansRepository();
  const useCase = new CreateTechnicianUseCase(techniciansRepository);

  return useCase;
}
