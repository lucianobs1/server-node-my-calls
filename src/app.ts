import fastify from 'fastify';
import { callsRoutes } from './http/controllers/calls/routes';

export const app = fastify();

app.register(callsRoutes);
