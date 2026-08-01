# w3-guestbook

Cloudflare Worker + D1 powering the guestbook API for w3.

## Stack

- [Cloudflare Workers](https://developers.cloudflare.com/workers/) — serverless runtime
- [Cloudflare D1](https://developers.cloudflare.com/d1/) — SQLite-backed database at the edge

## Architecture

```
browser
  ↓  POST /api/guestbook
Next.js API route          ← rate limit enforced here (1 msg / 15 min per IP)
  ↓  X-Worker-Secret (server-side only, never exposed to client)
Cloudflare Worker          ← verifies secret, rejects anything without it
  ↓
D1 database
```

Nobody can talk to the worker directly — the secret is only known to the Next.js API route. Rate limiting is enforced at the API route level before the worker is ever called.

## Setup

### 0. Login to Cloudflare

```bash
npx wrangler login
```

Run this after any changes in `wrangler.toml` or src to regenerate types.

```bash
npx wrangler types
```

### 1. Create a D1 database

```bash
npx wrangler d1 create w3guestbook
```

Copy the `database_id` from the output and update `wrangler.toml`.

### 2. Apply the schema

```bash
npm install
npm run db:init
```

For the production database, add `--remote`:

```bash
npm run db:init -- --remote
```

### 3. Set the worker secret

This will also create the remote worker if it doesn't exist. Ensure you use this same value (and `WORKER_URL`) in your Next.js app's environment.

```bash
npx wrangler secret put WORKER_SECRET
```

| Variable | Value |
|---|---|
| `WORKER_SECRET` | A long random string — keep this private |

Generate one with `openssl rand -hex 32`.

### 4. Test & Deploy

Create a `.dev.vars` for local testing and set the values from steps 1-3. Then test the worker (locally) using:

```bash
npm run dev
```

Finally, deploy the remote worker using:

```bash
npm run deploy
```

Or paste `src/index.ts` directly into the Cloudflare dashboard editor (Workers & Pages → Create → Quick Edit).

After deploying, copy the worker URL (e.g. `https://w3guestbook.<username>.workers.dev`) and add to the Next.js app's environment:

```env
WORKER_URL=https://w3guestbook.<username>.workers.dev
WORKER_SECRET=<same value as above>
```

## Routes

All routes require the `X-Worker-Secret` header matching `WORKER_SECRET`. Missing or wrong secret → `403`.

| Method | Path | Description |
|---|---|---|
| `GET` | `/entries` | All entries, newest first |
| `POST` | `/entries` | Create a new entry |
| `DELETE` | `/entries/:id` | Delete an entry by id |

### POST `/entries` — request body

```json
{
  "name":    "string (required, max 100)",
  "message": "string (required, max 500)",
  "emoji":   "string (required)",
  "from":    "string (optional)",
  "socials": {
    "github":   "username",
    "twitter":  "handle",
    "linkedin": "profile url",
    "mail":     "email",
    "link":     "url"
  }
}
```

### Deleting an entry manually

The DELETE endpoint is not exposed through the Next.js app — it's for direct manual use only. Call it with curl (or any HTTP client), passing the same secret:

```bash
curl -X DELETE https://w3guestbook.<username>.workers.dev/entries/<id> \
  -H "X-Worker-Secret: <your-secret>"
```

Entry IDs are UUIDs visible in the D1 table (Cloudflare dashboard → D1 → w3guestbook → entries).

