import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeCreateTechnicianUseCase } from '@/use-cases/technicians/factories/makeCreateTechnicianUseCase';

export async function createTechnicianController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const bodyTechniciansSchema = z.object({
    name: z.string().min(3),
  });

  const { name } = bodyTechniciansSchema.parse(request.body);

  const createTechnicianUseCase = makeCreateTechnicianUseCase();

  const technician = await createTechnicianUseCase.execute({
    name,
  });

  return reply.status(201).send(technician);
}
