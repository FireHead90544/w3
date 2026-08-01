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

const ENTRIES: GuestbookEntryData[] = [
	{
		id: "1",
		name: "arjun",
		message: "love your work! super inspiring stuff.",
		from: "mumbai",
		date: "2025-07-28",
		emoji: "🚀",
		socials: { github: "arjundev", twitter: "arjunxyz" },
	},
	{
		id: "2",
		name: "shreya",
		message: "clean code, clean vibes. 🧡 keep it going!",
		from: "bangalore",
		date: "2025-07-15",
		emoji: "🌸",
		socials: { linkedin: "shreyaml", twitter: "shreya_codes" },
	},
	{
		id: "3",
		name: "0rkartik",
		message: "cool projects. keep shipping!",
		date: "2025-07-08",
		emoji: "⚡",
		socials: { github: "0rkartik", mail: "kartik@example.com" },
	},
	{
		id: "4",
		name: "someone",
		message: "stumbled here and stayed. great portfolio.",
		from: "the internet",
		date: "2025-06-05",
		emoji: "🌙",
	},
	{
		id: "5",
		name: "neha rao",
		message: "really enjoyed reading through your blog. the writing on autonomous systems is 🔥",
		from: "delhi",
		date: "2025-05-20",
		emoji: "🤖",
		socials: { link: "https://neharao.dev" },
	},
	{
		id: "6",
		name: "taro yamamoto",
		message: "nice minimalism. hard to find these days!",
		from: "tokyo",
		date: "2025-04-11",
		emoji: "🎨",
		socials: { twitter: "taro_codes", github: "taroyam" },
	},
];

export default function GuestBook() {
	return (
		<section className="flex flex-col space-y-6 my-4 w-full">
			<div className="flex flex-col gap-1">
				<div className="flex items-baseline justify-between gap-3">
					<h1 className="text-3xl font-light">guestbook</h1>
					<span className="text-xs text-muted-foreground tabular-nums shrink-0">
						{ENTRIES.length} {ENTRIES.length === 1 ? "signature" : "signatures"}
					</span>
				</div>
				<span className="font-light text-muted-foreground">
					drop a cool note, say hi, or just{" "}
					<SignGuestbookTrigger />{" "}
					meow :3
				</span>
			</div>
			<div className="flex flex-col">
				{ENTRIES.length === 0 ? (
					<p className="text-sm text-muted-foreground py-8 text-center">
						no signatures yet — be the first to sign!
					</p>
				) : (
					ENTRIES.map((entry) => <GuestbookEntry key={entry.id} entry={entry} />)
				)}
			</div>
		</section>
	);
}