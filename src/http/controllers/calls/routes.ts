import { FastifyInstance } from 'fastify';
import { createCallController } from './createCallController';
import { listCallsController } from './listCallsController';
import { showCallController } from './showCallController';

export async function callsRoutes(app: FastifyInstance) {
  app.post('/calls', createCallController);
  app.get('/calls', listCallsController);
  app.get('/calls/:id', showCallController);
}
