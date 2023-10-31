import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListCallsUseCase } from '@/use-cases/calls/@factories/makeListCallsUseCase';

export async function listCallsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const listCallUseCase = makeListCallsUseCase();

  const calls = await listCallUseCase.execute();

  return reply.status(201).send(calls);
}
