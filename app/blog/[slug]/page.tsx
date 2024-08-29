import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";
import CustomMDX from "@/components/(layout)/CustomMDX";
import { formatDate } from "@/lib/utils";

export default function Post({ params }: { params: { slug: string } }) {
	const post = getBlogPosts().find((post) => post.slug === params.slug);
	if (!post) {
		return notFound();
	}

	return (
		<div className="flex flex-col space-y-6 my-4 w-full">
			<div className="flex flex-col">
				<div className="flex flex-col">
					<h1 className="text-3xl font-medium">{post.metadata.title.toLowerCase()}</h1>
					<span className="text-sm text-gray-500">{formatDate(post.metadata.publish_date, true)}</span>
				</div>
				<CustomMDX source={post.content} />
			</div>
		</div>
	);
}
