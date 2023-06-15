import { ICallsRepository } from '../../../repositories/ICallsRepository';

export class SummaryUseCase {
  constructor(private callsRepository: ICallsRepository) {}

  async execute() {
    const numberOfOpenCalls = await this.callsRepository.findAllOpen();
    const numberOfClosedCalls = await this.callsRepository.findAllClosed();
    const numberOfAllCalls = await this.callsRepository.findAll();

    return {
      numberOfOpenCalls,
      numberOfClosedCalls,
      numberOfAllCalls,
    };
  }
}
