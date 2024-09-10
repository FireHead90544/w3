import React from "react";
import PostItem from "@/components/(blog)/PostItem";
import { getBlogPosts } from "@/lib/blog";
import { Metadata } from "next";
import infoMeta from "@/content/misc/meta.json";

export const metadata: Metadata = {
	title: `${infoMeta.header.nick} // blog`,
	description: "The writings I documented to be read.",
	openGraph: {
		type: "website",
		title: `${infoMeta.header.nick} // blog`,
		description: "The writings I documented to be read.",
		images: "/api/og?title=Cool+posts+I+wrote+🔥",
	},
	twitter: {
		card: "summary_large_image",
		title: `${infoMeta.header.nick} // blog`,
		description: "The writings I documented to be read.",
		creator: `@${infoMeta.socials.twitter}`,
		images: "/api/og?title=Cool+posts+I+wrote+🔥",
	},
};

export default function Blog() {
	const posts = getBlogPosts().sort((a, b) => new Date(b.metadata.publish_date).getTime() - new Date(a.metadata.publish_date).getTime()).map((post) => ({
		title: post.metadata.title,
		slug: post.slug,
		publish_date: post.metadata.publish_date
	}));

	return (
		<section className="flex flex-col space-y-6 my-4 w-full">
			<div className="flex flex-col">
				<h1 className="text-3xl font-light">blog</h1>
				<span>the writings i documented to be read</span>
			</div>
			<ol className="space-y-2">
				{posts.map((post, idx) => (
					<li key={idx}>
						<PostItem post={post} id={idx + 1} />
					</li>
				))}
			</ol>
		</section>
	);
}
