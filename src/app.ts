import fastify from 'fastify';
import { callsRoutes } from './http/controllers/calls/routes';
import { informationsRoutes } from './http/controllers/informations/routes';

export const app = fastify();

app.register(callsRoutes);
app.register(informationsRoutes);
