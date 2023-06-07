import { FastifyInstance } from 'fastify';
import { createAdministratorController } from './createAdministratorController';

export async function administratorsRoutes(app: FastifyInstance) {
  app.post('/administrators', createAdministratorController);
}
