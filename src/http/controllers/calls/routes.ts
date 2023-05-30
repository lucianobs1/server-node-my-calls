import { FastifyInstance } from 'fastify';
import { createCallController } from './createCallController';
import { listCallsController } from './listCallsController';

export async function callsRoutes(app: FastifyInstance) {
  app.post('/calls', createCallController);
  app.get('/calls', listCallsController);
}
