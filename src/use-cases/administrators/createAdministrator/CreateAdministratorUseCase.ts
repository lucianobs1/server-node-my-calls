import { IAdministratorsRepository } from '../../../repositories/IAdministratorsRepository';

interface IAdministratorRequest {
  name: string;
}

export class CreateAdministratorUseCase {
  constructor(private administratorsRepository: IAdministratorsRepository) {}

  async execute({ name }: IAdministratorRequest) {
    const administrator = await this.administratorsRepository.create({
      name,
    });

    return administrator;
  }
}
