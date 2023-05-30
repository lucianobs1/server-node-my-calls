import { FastifyInstance } from 'fastify';
import { createCallController } from './createCallController';

export async function callsRoutes(app: FastifyInstance) {
  app.post('/calls', createCallController);
}
