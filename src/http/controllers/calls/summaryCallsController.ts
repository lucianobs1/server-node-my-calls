import { FastifyReply, FastifyRequest } from 'fastify';
import { makeSummaryUseCase } from '@/use-cases/calls/@factories/makeSummaryUseCase';

export async function summaryCallsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const summaryCallsUseCase = makeSummaryUseCase();

  const summary = await summaryCallsUseCase.execute();

  return reply.status(200).send(summary);
}
