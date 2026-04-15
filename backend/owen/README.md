# owen-backend

Backend API for the Owen fitness app.

## Stack

- [Bun](https://bun.sh) runtime
- [Elysia](https://elysiajs.com) web framework
- TypeScript

## Getting started

```bash
bun install
cp .env.example .env
bun run dev
```

Server starts on `http://localhost:3000`.

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `bun run dev`      | Start dev server with hot reload     |
| `bun run start`    | Start server                         |
| `bun test`         | Run tests                            |
| `bun run typecheck`| Type check without emitting          |

## Structure

```
src/
├── index.ts          # App entry + server bootstrap
├── config/env.ts     # Environment configuration
└── routes/           # Route modules
tests/                # bun:test specs
```

## Roadmap

Planned integrations (not yet implemented):

- Firebase authentication
- Database + ORM for user data
- Garmin Connect integration
- LLM integration (Anthropic / Vertex / Bedrock)
