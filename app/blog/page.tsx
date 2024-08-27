import React from "react";
import PostItem from "@/components/(blog)/PostItem";

export default function Blog() {
	const posts = [
		{
			title: "look back at 2024",
			slug: "look-back-at-2024",
			publish_date: "dec 31, 2024"
		},
		{
			title: "fresh start 2025 with low level",
			slug: "fresh-start-2025-with-low-level",
			publish_date: "aug 27, 2024"
		}
	]

	return (
		<div className="flex flex-col space-y-6 my-4 w-full">
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
		</div>
	);
}
