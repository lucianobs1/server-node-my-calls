import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  FASTIFY_PORT: z.coerce.number().default(3333),
  FASTIFY_HOST: z.coerce.string().default('0.0.0.0'),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('❌ Invalid environment variables ❌', _env.error.format());

  throw new Error('❌ Invalid environment variables ❌');
}

export const env = _env.data;
