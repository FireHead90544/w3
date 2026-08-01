export interface Env {
	DB: D1Database;
	WORKER_SECRET: string;
}

const json = (data: unknown, status = 200) =>
	new Response(JSON.stringify(data), {
		status,
		headers: { "Content-Type": "application/json" },
	});

const err = (message: string, status: number) => json({ error: message }, status);

async function getEntries(env: Env): Promise<Response> {
	const { results } = await env.DB.prepare(
		"SELECT * FROM entries ORDER BY created_at DESC"
	).all();
	return json(results);
}

async function createEntry(req: Request, env: Env): Promise<Response> {
	let body: {
		name?: string;
		message?: string;
		from?: string;
		emoji?: string;
		socials?: Record<string, string>;
	};

	try {
		body = await req.json();
	} catch {
		return err("invalid json", 400);
	}

	const { name, message, from, emoji, socials } = body;

	if (!name?.trim() || !message?.trim() || !emoji?.trim())
		return err("name, message and emoji are required", 400);

	if (name.length > 100 || message.length > 500)
		return err("field too long", 400);

	const id = crypto.randomUUID();
	const date = new Date().toISOString().slice(0, 10);

	await env.DB.prepare(
		`INSERT INTO entries (id, name, message, from_location, date, emoji, github, twitter, linkedin, mail, link, created_at)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
	).bind(
		id, name.trim(), message.trim(), from?.trim() ?? null, date, emoji.trim(),
		socials?.github ?? null, socials?.twitter ?? null, socials?.linkedin ?? null,
		socials?.mail ?? null, socials?.link ?? null, Date.now()
	).run();

	return json({ id }, 201);
}

async function deleteEntry(id: string, env: Env): Promise<Response> {
	const { meta } = await env.DB.prepare(
		"DELETE FROM entries WHERE id = ?"
	).bind(id).run();

	if (meta.changes === 0) return err("entry not found", 404);
	return json({ deleted: id });
}

export default {
	async fetch(req: Request, env: Env): Promise<Response> {
		if (req.headers.get("X-Worker-Secret") !== env.WORKER_SECRET)
			return err("forbidden", 403);

		const { pathname } = new URL(req.url);
		const segments = pathname.split("/").filter(Boolean);

		if (segments[0] !== "entries") return err("not found", 404);

		if (segments.length === 1) {
			if (req.method === "GET") return getEntries(env);
			if (req.method === "POST") return createEntry(req, env);
		}

		if (segments.length === 2 && req.method === "DELETE")
			return deleteEntry(segments[1], env);

		return err("not found", 404);
	},
};
