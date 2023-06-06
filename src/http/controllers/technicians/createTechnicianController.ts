import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeTechnician } from '../../../use-cases/technicians/@factories/makeCreateTechnician';

export async function createTechnicianController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const bodyTechniciansSchema = z.object({
    name: z.string().min(3),
  });

  const { name } = bodyTechniciansSchema.parse(request.body);

  const createTechnicianUseCase = makeTechnician();

  const technician = await createTechnicianUseCase.execute({
    name,
  });

  return reply.status(201).send(technician);
}
