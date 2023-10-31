import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListTechniciansUseCase } from '../../../use-cases/technicians/factories/makeListTechniciansUseCase';

export async function listTechniciansController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const listTechniciansUseCase = makeListTechniciansUseCase();

  const clients = await listTechniciansUseCase.execute();

  return reply.status(200).send(clients);
}
