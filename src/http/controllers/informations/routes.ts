import { FastifyInstance } from 'fastify';
import { createInformationController } from './createInformationController';

export async function informationsRoutes(app: FastifyInstance) {
  app.post('/:call_id/informations', createInformationController);
}
