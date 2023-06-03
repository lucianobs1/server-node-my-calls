import { FastifyInstance } from 'fastify';
import { createInformationController } from './createInformationController';
import { listInformationsController } from './listInformationsController';

export async function informationsRoutes(app: FastifyInstance) {
  app.post('/:call_id/informations', createInformationController);
  app.get('/:call_id/informations', listInformationsController);
}
