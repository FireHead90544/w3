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
		<div className="flex flex-col my-6 w-full">
			<div className="flex flex-col space-y-8">
				<div className="flex flex-col space-y-2">
					<h1 className="text-3xl font-semibold">{post.metadata.title.toLowerCase()}</h1>
					<span className="text-sm text-gray-500">{formatDate(post.metadata.publish_date, true)}</span>
				</div>
				<article className="max-w-none lowercase prose prose-zinc prose-a:no-underline prose-code:normal-case dark:prose-invert">
					<CustomMDX source={post.content} />
				</article>
			</div>
		</div>
	);
}
