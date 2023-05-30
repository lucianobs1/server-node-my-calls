import { ICallsRepository } from '../../repositories/ICallsRepository';

interface IRequest {
  description: string;
  technician_id: string;
  condo_id: string;
}

export class CreateCallUseCase {
  constructor(private callsRepository: ICallsRepository) {}
  async execute({ description, technician_id, condo_id }: IRequest) {
    const call = await this.callsRepository.create({
      description,
      technician_id,
      condo_id,
    });

    return { call };
  }
}
