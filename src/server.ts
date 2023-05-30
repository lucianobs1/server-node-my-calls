import { app } from './app';
import { env } from './env';

app
  .listen({
    port: env.FASTIFY_PORT,
    host: env.FASTIFY_HOST,
  })
  .then(() =>
    console.log(`✨ HTTP Server Running on PORT ${env.FASTIFY_PORT} ✨`)
  );
