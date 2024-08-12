import { Button } from "@/components/ui/button";
import Link from "next/link";
import InternalLink from "@/components/(misc)/InternalLink";

export default function Home() {
	return (
		<div className="flex flex-col space-y-6 my-4 w-full">
			<div className="flex flex-col">
				<h1 className="text-3xl font-light">work</h1>
				<span>some of my most notable works and projects</span>
			</div>
			<div className="flex flex-col space-y-3">
				<div className="flex flex-col">
					<div className="flex justify-between text-xl">
                        <div className="space-x-2">
                            <span>1.</span>
                            <span>how-cli</span>
                        </div>
                        <div className="space-x-2">
                            <InternalLink href="/" text="source" />
                            <InternalLink href="/" text="deployment" />
                        </div>
					</div>
					<span>context aware ai-based cli application built using langchain + typer to help you with command line and shell.</span>
				</div>
			</div>
            <div className="flex flex-col space-y-3">
				<div className="flex flex-col">
					<div className="flex justify-between text-xl">
                        <div className="space-x-2">
                            <span>2.</span>
                            <span>retro rings</span>
                        </div>
                        <div className="space-x-2">
                            <InternalLink href="/" text="source" />
                            <InternalLink href="/" text="deployment" />
                        </div>
					</div>
					<span>an 8-bit rpg-themed application written w/ next.js, react, tailwindcss, chart.js, fastapi and pytorch designed to predict outcomes for the 2024 paris olympics for codedex summer hackathon 2024.</span>
				</div>
			</div>
		</div>
	);
}