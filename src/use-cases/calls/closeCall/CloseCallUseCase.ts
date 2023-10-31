import { ICallsRepository } from '@/repositories/ICallsRepository';

interface ICloseCallRequest {
  id: string;
}

export class CloseCallUseCase {
  constructor(private callsRepository: ICallsRepository) {}

  async execute({ id }: ICloseCallRequest) {
    let call = await this.callsRepository.findById(id);

    if (!call) {
      throw new Error('Call does not found');
    }

    call = await this.callsRepository.update(id);

    return call;
  }
}
