import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

const { WORKER_URL, WORKER_SECRET } = process.env;

const RATE_LIMIT_MS = 15 * 60 * 1000;
const rateLimitMap = new Map<string, number>();

function getIP(req: NextRequest): string {
	return (
		req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
		req.headers.get("x-real-ip") ??
		"unknown"
	);
}

function isRateLimited(ip: string): boolean {
	const last = rateLimitMap.get(ip);
	if (last && Date.now() - last < RATE_LIMIT_MS) return true;
	rateLimitMap.set(ip, Date.now());
	return false;
}

export async function POST(req: NextRequest) {
	if (!WORKER_URL || !WORKER_SECRET)
		return NextResponse.json({ error: "worker not configured" }, { status: 503 });

	const ip = getIP(req);
	if (isRateLimited(ip))
		return NextResponse.json(
			{ error: "rate limited — try again in 15 minutes" },
			{ status: 429 }
		);

	let body: unknown;
	try {
		body = await req.json();
	} catch {
		return NextResponse.json({ error: "invalid body" }, { status: 400 });
	}

	const res = await fetch(`${WORKER_URL}/entries`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Worker-Secret": WORKER_SECRET,
		},
		body: JSON.stringify(body),
	});

	const data = await res.json();

	if (res.ok) {
		// { expire: 0 } immediately expires the cache entry so the next request
		// (router.refresh()) is a blocking cache miss and returns fresh data.
		// "max" (stale-while-revalidate) would serve the stale page on refresh — wrong for a guestbook.
		revalidateTag("guestbook", { expire: 0 });
	}

	return NextResponse.json(data, { status: res.status });
}
