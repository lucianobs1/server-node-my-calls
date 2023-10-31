import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeCloseCallUseCase } from '@/use-cases/calls/@factories/makeCloseCallUseCase';

export async function closeCallController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const closeCallSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = closeCallSchema.parse(request.params);

  const closeCallUseCase = makeCloseCallUseCase();

  const call = await closeCallUseCase.execute({ id });

  return reply.status(201).send(call);
}
