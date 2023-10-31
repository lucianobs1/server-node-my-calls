import { ICallsRepository } from '@/repositories/ICallsRepository';

export class ListCallUseCase {
  constructor(private callsRepository: ICallsRepository) {}

  async execute() {
    const calls = await this.callsRepository.list();

    return {
      calls,
    };
  }
}
