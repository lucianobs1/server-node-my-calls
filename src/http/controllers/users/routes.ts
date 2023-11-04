import { FastifyInstance } from 'fastify';
import { createUserController } from './createUserController';
import { listUsersController } from './listUsersController';

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', createUserController);
  app.get('/users', listUsersController);
}
