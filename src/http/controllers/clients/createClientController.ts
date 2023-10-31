import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeCreateClientUseCase } from '@/use-cases/clients/@factories/makeCreateClientUseCase';

export async function createClientController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const bodyTechniciansSchema = z.object({
    condominium_name: z.string().min(3),
    administrator_name: z.string().min(3),
    email: z.string().email('Invalid email format'),
  });

  const { condominium_name, administrator_name, email } =
    bodyTechniciansSchema.parse(request.body);

  const createClientUseCase = makeCreateClientUseCase();

  const client = await createClientUseCase.execute({
    condominium_name,
    administrator_name,
    email,
  });

  return reply.status(201).send(client);
}
