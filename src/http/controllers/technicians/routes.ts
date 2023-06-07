import { FastifyInstance } from 'fastify';
import { createTechnicianController } from './createTechnicianController';
import { listTechniciansController } from './listTechniciansController';

export async function techniciansRoutes(app: FastifyInstance) {
  app.post('/technicians', createTechnicianController);
  app.get('/technicians', listTechniciansController);
}
