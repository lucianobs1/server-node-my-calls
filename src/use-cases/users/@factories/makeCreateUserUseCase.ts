import { UsersRepository } from '@/repositories/prisma/UsersRepository';
import { CreateUserUseCase } from '../createUserUseCase/createUserUseCase';

export function makeCreateUserUseCase() {
  const usersRepository = new UsersRepository();
  const useCase = new CreateUserUseCase(usersRepository);

  return useCase;
}
