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
					<span className="flex items-center space-x-2">
						<Link className="hover:text-foreground cursor-pointer" target="_blank" href={github}><GitHubIcon /></Link>
						<Link className="hover:text-foreground cursor-pointer" target="_blank" href={linkedin}><LinkedInIcon /></Link>
						<Link className="hover:text-foreground cursor-pointer" target="_blank" href={twitter}><TwitterIcon /></Link>
						<Link className="hover:text-foreground cursor-pointer" href={`mailto:${mail}`}><EmailIcon /></Link>
					</span>
				</div>
				<span className="hover:text-foreground cursor-pointer">{ getFrut() } :3</span>
			</div>
		</footer>
	);
};

export default Footer;
