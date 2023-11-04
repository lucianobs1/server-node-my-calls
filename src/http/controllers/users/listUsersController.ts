import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListUsersUseCase } from '@/use-cases/users/@factories/makeListUsersUseCase';

export async function listUsersController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const listUsersUseCase = makeListUsersUseCase();

  const users = await listUsersUseCase.execute();

  return reply.status(201).send(users);
}
