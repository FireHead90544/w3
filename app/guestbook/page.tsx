import { Metadata } from "next";
import infoMeta from "@/content/misc/meta.json";
import GuestbookEntry, { GuestbookEntryData } from "@/components/(guestbook)/GuestbookEntry";
import SignGuestbookTrigger from "@/components/(guestbook)/SignGuestbookTrigger";

export const metadata: Metadata = {
	title: `${infoMeta.header.nick} // guestbook`,
	description: "Drop a cool note, say hi, or just sign meow :3.",
	openGraph: {
		type: "website",
		title: `${infoMeta.header.nick} // guestbook`,
		description: "Drop a cool note, say hi, or just sign meow :3.",
		images: "/api/og?title=Sign+the+guestbook+👋",
	},
	twitter: {
		card: "summary_large_image",
		title: `${infoMeta.header.nick} // guestbook`,
		description: "Drop a cool note, say hi, or just sign meow :3.",
		creator: `@${infoMeta.socials.twitter}`,
		images: "/api/og?title=Sign+the+guestbook+👋",
	},
};

type RawEntry = {
	id: string;
	name: string;
	message: string;
	from_location: string | null;
	date: string;
	emoji: string;
	github: string | null;
	twitter: string | null;
	linkedin: string | null;
	mail: string | null;
	link: string | null;
};

async function getEntries(): Promise<GuestbookEntryData[]> {
	const { WORKER_URL, WORKER_SECRET } = process.env;
	if (!WORKER_URL || !WORKER_SECRET) return [];

	try {
		const res = await fetch(`${WORKER_URL}/entries`, {
			headers: { "X-Worker-Secret": WORKER_SECRET },
			next: { tags: ["guestbook"] },
		});
		if (!res.ok) return [];

		return ((await res.json()) as RawEntry[]).map((r) => ({
			id: r.id,
			name: r.name,
			message: r.message,
			from: r.from_location ?? undefined,
			date: r.date,
			emoji: r.emoji,
			socials: {
				github: r.github ?? undefined,
				twitter: r.twitter ?? undefined,
				linkedin: r.linkedin ?? undefined,
				mail: r.mail ?? undefined,
				link: r.link ?? undefined,
			},
		}));
	} catch {
		return [];
	}
}

export default async function GuestBook() {
	const entries = await getEntries();

	return (
		<section className="flex flex-col space-y-6 my-4 w-full">
			<div className="flex flex-col gap-1">
				<div className="flex items-baseline justify-between gap-3">
					<h1 className="text-3xl font-light">guestbook</h1>
					<span className="text-xs text-muted-foreground tabular-nums shrink-0">
						{entries.length} {entries.length === 1 ? "signature" : "signatures"}
					</span>
				</div>
				<span className="font-light text-muted-foreground">
					wanna leave "i was here"?{" "}
					<SignGuestbookTrigger />{" "}
					a message :3
				</span>
			</div>
			<div className="flex flex-col">
				{entries.length === 0 ? (
					<p className="text-sm text-muted-foreground py-8 text-center">
						no signatures yet — be the first to sign!
					</p>
				) : (
					entries.map((entry) => <GuestbookEntry key={entry.id} entry={entry} />)
				)}
			</div>
		</section>
	);
}