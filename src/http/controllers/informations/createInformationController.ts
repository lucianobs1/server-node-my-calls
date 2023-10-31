import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeCreateInformationUseCase } from '@/use-cases/infos/factories/makeCreateInformationUseCase';

export async function createInformationController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createInformationSchema = z.object({
    description: z.string(),
  });

  const paramsInformationSchema = z.object({
    call_id: z.string().uuid(),
  });

  const { call_id } = paramsInformationSchema.parse(request.params);
  const { description } = createInformationSchema.parse(request.body);

  const createInformationUseCase = makeCreateInformationUseCase();

  const information = await createInformationUseCase.execute({
    description,
    call_id,
  });

  return reply.status(201).send(information);
}
