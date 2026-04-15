import { describe, expect, it } from 'bun:test';
import { app } from '@/index.ts';

describe('health', () => {
  it('GivenRunningApp_WhenGetHealth_ThenReturnsOk', async () => {
    const res = await app.handle(new Request('http://localhost/health'));
    const body = (await res.json()) as { status: string };
    expect(res.status).toBe(200);
    expect(body.status).toBe('ok');
  });

  it('GivenRunningApp_WhenGetRoot_ThenReturnsAppInfo', async () => {
    const res = await app.handle(new Request('http://localhost/'));
    const body = (await res.json()) as { name: string };
    expect(res.status).toBe(200);
    expect(body.name).toBe('owen');
  });
});
