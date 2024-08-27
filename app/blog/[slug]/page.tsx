import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";
import CustomMDX from "@/components/(layout)/CustomMDX";

export default function Post({ params }: { params: { slug: string } }) {
	const post = getBlogPosts().find((post) => post.slug === params.slug);
	if (!post) {
		return notFound();
	}

	return (
		<div className="flex flex-col space-y-6 my-4 w-full">
			<div className="flex flex-col">
				<h1 className="text-3xl font-light">{post.metadata.title.toLowerCase()}</h1>
				<CustomMDX source={post.content} />
			</div>
		</div>
	);
}
