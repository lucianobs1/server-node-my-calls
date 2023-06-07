import { FastifyInstance } from 'fastify';
import { createClientController } from './createClientController';

export async function clientsRoutes(app: FastifyInstance) {
  app.post('/clients', createClientController);
}
