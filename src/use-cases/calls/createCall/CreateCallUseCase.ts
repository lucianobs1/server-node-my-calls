import { ICallsRepository } from '@/repositories/ICallsRepository';

interface ICreateCallRequest {
  description: string;
  technician_id: string;
  client_id: string;
}

export class CreateCallUseCase {
  constructor(private callsRepository: ICallsRepository) {}
  async execute({ description, technician_id, client_id }: ICreateCallRequest) {
    const call = await this.callsRepository.create({
      description,
      technician_id,
      client_id,
    });

    return { call };
  }
}
