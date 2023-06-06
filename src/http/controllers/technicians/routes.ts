import { FastifyInstance } from 'fastify';
import { createTechnicianController } from './createTechnicianController';

export async function techniciansRoutes(app: FastifyInstance) {
  app.post('/technicians', createTechnicianController);
}
