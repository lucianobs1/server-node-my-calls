import { AdministratorsRepository } from '../../../repositories/prisma/AdministratorsRepository';
import { CreateAdministratorUseCase } from '../createAdministrator/CreateAdministratorUseCase';

export function makeAdministratorUseCase() {
  const administratorsRepository = new AdministratorsRepository();
  const useCase = new CreateAdministratorUseCase(administratorsRepository);
  return useCase;
}
