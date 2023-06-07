import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeAdministratorUseCase } from '../../../use-cases/administrators/@factories/makeCreateAdministratorUseCase';

export async function createAdministratorController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const bodyTechniciansSchema = z.object({
    name: z.string().min(3),
  });

  const { name } = bodyTechniciansSchema.parse(request.body);

  const createAdministratorUseCase = makeAdministratorUseCase();

  const administrator = await createAdministratorUseCase.execute({
    name,
  });

  return reply.status(201).send(administrator);
}
