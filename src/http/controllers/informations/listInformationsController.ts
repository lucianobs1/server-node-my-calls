import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListInformationsUseCase } from '@/use-cases/infos/factories/makeListInformationsUseCase';

export async function listInformationsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const paramsInformationSchema = z.object({
    call_id: z.string().uuid(),
  });

  const { call_id } = paramsInformationSchema.parse(request.params);

  const listInformationsUseCase = makeListInformationsUseCase();

  const informations = await listInformationsUseCase.execute({
    call_id,
  });

  return reply.status(201).send(informations);
}
