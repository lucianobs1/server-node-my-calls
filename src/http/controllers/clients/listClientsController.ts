import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListClientsUseCase } from '../../../use-cases/clients/@factories/makeListClientsUseCase';

export async function listClientsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const listClientsUseCase = makeListClientsUseCase();

  const clients = await listClientsUseCase.execute();

  return reply.status(201).send(clients);
}
