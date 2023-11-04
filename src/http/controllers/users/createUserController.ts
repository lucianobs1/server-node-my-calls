import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeCreateUserUseCase } from '@/use-cases/users/@factories/makeCreateUserUseCase';

export async function createUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { name, email, password } = createUserSchema.parse(request.body);

  const createUserUseCase = makeCreateUserUseCase();

  const user = await createUserUseCase.execute({
    name,
    email,
    password,
  });

  return reply.status(201).send(user);
}
