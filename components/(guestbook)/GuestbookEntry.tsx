import React from "react";
import { GitHubLogoIcon as GitHubIcon, LinkedInLogoIcon as LinkedInIcon } from "@radix-ui/react-icons";
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";
import { LuMail as MailIcon, LuLink as LinkIcon } from "react-icons/lu";
import Link from "next/link";

export interface GuestbookEntryData {
	id: string;
	name: string;
	message: string;
	from?: string;
	date: string;
	emoji: string;
	socials?: {
		github?: string;
		twitter?: string;
		linkedin?: string;
		mail?: string;
		link?: string;
	};
}

const resolveHref = (type: string, value: string) => {
	if (type === "mail") return `mailto:${value}`;
	if (type === "twitter") return `https://x.com/${value}`;
	if (type === "github") return `https://github.com/${value}`;
	if (type === "linkedin") return `https://linkedin.com/in/${value}`;
	return value;
};

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
	github: <GitHubIcon className="w-3 h-3" />,
	twitter: <TwitterIcon className="w-3 h-3" />,
	linkedin: <LinkedInIcon className="w-3 h-3" />,
	mail: <MailIcon className="w-3 h-3" />,
	link: <LinkIcon className="w-3 h-3" />,
};

const SocialIcon = ({ type, href }: { type: string; href: string }) => (
	<Link
		href={resolveHref(type, href)}
		target="_blank"
		rel="noopener noreferrer"
		className="text-muted-foreground/60 hover:text-foreground transition-colors duration-150"
		aria-label={`${type} link`}
	>
		{SOCIAL_ICONS[type]}
	</Link>
);

const GuestbookEntry = ({ entry }: { entry: GuestbookEntryData }) => {
	const date = new Date(entry.date)
		.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
		.toLowerCase();

	const hasSocials = entry.socials && Object.values(entry.socials).some(Boolean);

	return (
		<div className="flex gap-4 py-4">
			<div className="shrink-0 w-7 h-7 rounded-sm bg-muted flex items-center justify-center mt-0.5 select-none">
				<span className="text-xs leading-none">{entry.emoji}</span>
			</div>
			<div className="flex-1 min-w-0 flex flex-col gap-1">
				<div className="flex items-center gap-2 flex-wrap">
					<span className="text-sm font-medium leading-none">{entry.name.toLowerCase()}</span>
					{entry.from && (
						<>
							<span className="text-muted-foreground/40 text-xs">·</span>
							<span className="text-xs text-muted-foreground">from {entry.from.toLowerCase()}</span>
						</>
					)}
					<time dateTime={entry.date} className="text-xs text-muted-foreground/50 ml-auto tabular-nums">
						{date}
					</time>
				</div>
				<p className="text-sm font-light text-foreground/80 leading-relaxed">{entry.message}</p>
				{hasSocials && (
					<div className="flex items-center gap-2 pt-0.5">
						{entry.socials?.github && <SocialIcon type="github" href={entry.socials.github} />}
						{entry.socials?.twitter && <SocialIcon type="twitter" href={entry.socials.twitter} />}
						{entry.socials?.linkedin && <SocialIcon type="linkedin" href={entry.socials.linkedin} />}
						{entry.socials?.mail && <SocialIcon type="mail" href={entry.socials.mail} />}
						{entry.socials?.link && <SocialIcon type="link" href={entry.socials.link} />}
					</div>
				)}
			</div>
		</div>
	);
};

export default GuestbookEntry;
