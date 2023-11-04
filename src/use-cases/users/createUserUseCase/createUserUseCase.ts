import { hash } from 'bcryptjs';
import { IUsersRepository } from '@/repositories/IUsersRepository';

interface ICreateUerUseCase {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, password }: ICreateUerUseCase) {
    const hasUser = await this.usersRepository.findByEmail(email);

    if (hasUser) {
      throw new Error('User Already exists');
    }

    const password_hash = await hash(password, 6);

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    });

    return user;
  }
}
