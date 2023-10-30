import { ICallsRepository } from '../../../repositories/ICallsRepository';
import { countCallsByMonth } from '../../../utils/countCallsByMonth';

export class SummaryUseCase {
  constructor(private callsRepository: ICallsRepository) {}

  async execute() {
    const numberOfOpenCalls = await this.callsRepository.countAllOpen();
    const numberOfClosedCalls = await this.callsRepository.countAllClosed();
    const numberOfAllCalls = await this.callsRepository.countAll();
    const numberOfCallsPerMonth = await this.callsRepository.countAllPerMonth();

    countCallsByMonth(numberOfCallsPerMonth);

    return {
      numberOfOpenCalls,
      numberOfClosedCalls,
      numberOfAllCalls,
      numberOfCallsPerMonth,
    };
  }
}
