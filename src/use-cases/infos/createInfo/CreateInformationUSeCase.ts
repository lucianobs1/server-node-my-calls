import { IInformationsRepository } from '../../../repositories/IInformationsRepository';

interface ICreateInformationRequest {
  description: string;
  call_id: string;
}

export class CreateInformationUseCase {
  constructor(private infosRepository: IInformationsRepository) {}
  async execute({ description, call_id }: ICreateInformationRequest) {
    const information = await this.infosRepository.create({
      description,
      call_id,
    });

    return information;
  }
}
