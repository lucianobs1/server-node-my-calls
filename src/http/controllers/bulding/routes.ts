import { FastifyInstance } from 'fastify';
import { createTechnicianController } from './createTechnicianController';

export async function buildingRoutes(app: FastifyInstance) {
  app.post('/buildings', createTechnicianController);
}
