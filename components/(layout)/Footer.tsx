import React from "react";
import Link from "next/link";
import { GitHubLogoIcon as GitHubIcon, LinkedInLogoIcon as LinkedInIcon } from "@radix-ui/react-icons";
import { LuMail as EmailIcon } from "react-icons/lu";
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";
import { MdAlternateEmail as AtIcon } from "react-icons/md";
import { Separator } from "../ui/separator";
import { hash } from "@/lib/utils";

interface FooterProps {
	github: string,
	linkedin: string,
	twitter: string,
	mail: string
}

const Footer = ({ github, linkedin, twitter, mail }: FooterProps) => {
	const getFrut = () => {
		const fruts = [
			"🍎 appl",
			"🍌 banan",
			"🍊 orng",
			"🍇 grps",
			"🍓 strwbry",
			"🍑 pch",
			"🍍 pinappl",
			"🍉 wtrmln",
			"🥝 kiw",
			"🍒 chry",
			"🍋 lim",
			"🍐 guav",
			"🥑 avcdo",
			"🥭 mngo"
		];

		const today = new Date().toISOString().slice(0, 10);
		const h = hash(today);
		const index = Math.abs(h) % fruts.length;

		return fruts[index];
	};

	return (
		<footer className="mt-2">
			<Separator className="mb-2"/> {/* TODO: Remove Probably */}
			<div className="flex justify-between items-center text-muted-foreground">
				<div className="flex space-x-2 items-center text-sm">
					<span className="flex items-center text-foreground cursor-pointer"><AtIcon /></span>
					<span className="text-lg font-semibold">{'//'}</span>
					<nav aria-label="Social Media Links">
						<ul className="flex items-center space-x-2">
							<li><Link className="hover:text-foreground cursor-pointer" target="_blank" href={github} aria-label="Visit my GitHub profile"><GitHubIcon /></Link></li>
							<li><Link className="hover:text-foreground cursor-pointer" target="_blank" href={linkedin} aria-label="Connect with me on LinkedIn"><LinkedInIcon /></Link></li>
							<li><Link className="hover:text-foreground cursor-pointer" target="_blank" href={twitter} aria-label="Say Hi to me on Twitter"><TwitterIcon /></Link></li>
							<li><Link className="hover:text-foreground cursor-pointer" href={`mailto:${mail}`} aria-label={`Mail me at ${mail}`}><EmailIcon /></Link></li>
						</ul>
					</nav>
				</div>
				<span className="hover:text-foreground cursor-pointer">{ getFrut() } :3</span>
			</div>
		</footer>
	);
};

export default Footer;
