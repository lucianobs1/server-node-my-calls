import { FastifyInstance } from 'fastify';
import { createClientController } from './createClientController';
import { listClientsController } from './listClientsController';

export async function clientsRoutes(app: FastifyInstance) {
  app.post('/clients', createClientController);
  app.get('/clients', listClientsController);
}
