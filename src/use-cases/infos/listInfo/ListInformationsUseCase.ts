import { IInformationsRepository } from '../../../repositories/IInformationsRepository';

interface IListInformationsRequest {
  call_id: string;
}

export class ListInformationsUseCase {
  constructor(private infosRepository: IInformationsRepository) {}

  async execute({ call_id }: IListInformationsRequest) {
    const informations = await this.infosRepository.list(call_id);
    return informations;
  }
}
