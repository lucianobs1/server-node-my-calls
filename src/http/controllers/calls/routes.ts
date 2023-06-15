import { FastifyInstance } from 'fastify';
import { createCallController } from './createCallController';
import { listCallsController } from './listCallsController';
import { showCallController } from './showCallController';
import { closeCallController } from './closeCallController';

export async function callsRoutes(app: FastifyInstance) {
  app.post('/calls', createCallController);
  app.get('/calls', listCallsController);
  app.get('/calls/:id', showCallController);
  app.put('/calls/:id', closeCallController);
}
