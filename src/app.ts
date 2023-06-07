import fastify from 'fastify';
import { callsRoutes } from './http/controllers/calls/routes';
import { informationsRoutes } from './http/controllers/informations/routes';
import { techniciansRoutes } from './http/controllers/technicians/routes';
import { administratorsRoutes } from './http/controllers/administrators/routes';

export const app = fastify();

app.register(callsRoutes);
app.register(informationsRoutes);
app.register(techniciansRoutes);
app.register(administratorsRoutes);
