import { UsersRepository } from '@/repositories/prisma/UsersRepository';
import { ListUsersUseCase } from '../listUsers/listUsersUseCase';

export function makeListUsersUseCase() {
  const usersRepository = new UsersRepository();
  const useCase = new ListUsersUseCase(usersRepository);

  return useCase;
}
