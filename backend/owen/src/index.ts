import { Elysia } from 'elysia';
import { env } from './config/env.ts';
import { healthRoutes } from './routes/health.ts';

export const app = new Elysia()
  .onError(({ error, code }) => {
    console.error(`[${code}]`, error);
  })
  .get('/', () => ({ name: 'owen', version: '0.1.0' }))
  .use(healthRoutes);

if (import.meta.main) {
  app.listen(env.port, ({ hostname, port }) => {
    console.log(`owen listening on http://${hostname}:${port}`);
  });
}
