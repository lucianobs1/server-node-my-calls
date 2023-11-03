import { TechniciansRepository } from '@/repositories/prisma/TechniciansRepository';
import { ListTechniciansUseCase } from '../listTechnician/ListTechniciansUseCase';

export function makeListTechniciansUseCase() {
  const techniciansRepository = new TechniciansRepository();
  const useCase = new ListTechniciansUseCase(techniciansRepository);

  return useCase;
}
