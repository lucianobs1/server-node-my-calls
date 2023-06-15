import { ICallsRepository } from '../../../repositories/ICallsRepository';

interface IGetOneCallRequest {
  call_id: string;
}

export class ShowCallUseCase {
  constructor(private callsRepository: ICallsRepository) {}
  async execute({ call_id }: IGetOneCallRequest) {
    const call = await this.callsRepository.findById(call_id);

    if (!call) {
      throw new Error('Call does not exists');
    }

    return {
      call,
    };
  }
}
