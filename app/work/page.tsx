import ProjectItem from "@/components/(work)/ProjectItem";
import data from "@/content/work/projects.json";
import { Metadata } from "next";
import infoMeta from "@/content/misc/meta.json";

export const metadata: Metadata = {
	title: `${infoMeta.header.nick} // work`,
	description: "Some of my most notable works and projects.",
	openGraph: {
		type: "website",
		title: `${infoMeta.header.nick} // work`,
		description: "Some of my most notable works and projects.",
		images: "/api/og?title=Cool+stuff+I+made+✨",
	},
	twitter: {
		card: "summary_large_image",
		title: `${infoMeta.header.nick} // work`,
		description: "Some of my most notable works and projects.",
		creator: `@${infoMeta.socials.twitter}`,
		images: "/api/og?title=Cool+stuff+I+made+✨"
	}
};

export default function Work() {
	const projects = data.projects.sort((a, b) => new Date(b.released_by).getTime() - new Date(a.released_by).getTime());
	return (
		<section className="flex flex-col space-y-6 my-4 w-full">
			<div className="flex flex-col">
				<h1 className="text-3xl font-light">work</h1>
				<span>some of my most notable works and projects</span>
			</div>
			<ol className="space-y-6">
				{projects.map((project, idx) => (
					<li key={idx}>
						<ProjectItem project={project} id={idx+1} />
					</li>
				))}
			</ol>
		</section>
	);
}