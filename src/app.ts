import fastify from 'fastify';
import cors from '@fastify/cors';

import { callsRoutes } from './http/controllers/calls/routes';
import { informationsRoutes } from './http/controllers/informations/routes';
import { techniciansRoutes } from './http/controllers/technicians/routes';
import { clientsRoutes } from './http/controllers/clients/routes';

export const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(callsRoutes);
app.register(informationsRoutes);
app.register(techniciansRoutes);
app.register(clientsRoutes);
