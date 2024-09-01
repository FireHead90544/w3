import React from "react";
import PostItem from "@/components/(blog)/PostItem";
import { getBlogPosts } from "@/lib/blog";

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
