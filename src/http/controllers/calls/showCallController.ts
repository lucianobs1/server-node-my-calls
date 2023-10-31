import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeShowCallUseCase } from '@/use-cases/calls/@factories/makeShowCallUseCase';

export async function showCallController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const showCallSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = showCallSchema.parse(request.params);

  const showCallUseCase = makeShowCallUseCase();

  const call = await showCallUseCase.execute({ call_id: id });

  return reply.status(201).send(call);
}
