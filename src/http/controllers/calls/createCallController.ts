import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeCreateCallUseCase } from '../../../use-cases/factories/makeCreateCallUseCase';

export async function createCallController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createCallSchema = z.object({
    description: z.string(),
    technician_id: z.string(),
    condo_id: z.string(),
  });

  const { description, technician_id, condo_id } = createCallSchema.parse(
    request.body
  );

  const createCallUseCase = makeCreateCallUseCase();

  const call = await createCallUseCase.execute({
    description,
    technician_id,
    condo_id,
  });

  return reply.status(201).send(call);
}
