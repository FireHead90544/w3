import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";
import CustomMDX from "@/components/(layout)/CustomMDX";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
	const post = getBlogPosts().find((post) => post.slug === params.slug);
	if (!post) {
		return;
	}

	const { title, summary, publish_date } = post.metadata;
	const ogImage = `/api/og?title=${title}`;

	return {
		title,
		description: summary,
		openGraph: {
			title,
			description: summary,
			type: "article",
			publishedTime: publish_date,
			url: `/blog/${post.slug}`,
			images: ogImage
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: summary,
			images: ogImage
		}
	}
}

export async function generateStaticParams() {
	const posts = getBlogPosts().map((post) => (
		{ slug: post.slug }
	));

	return posts
}

export default function Post({ params }: { params: { slug: string } }) {
	const post = getBlogPosts().find((post) => post.slug === params.slug);
	if (!post) {
		return notFound();
	}

	return (
		<section className="flex flex-col my-6 w-full">
			<div className="flex flex-col space-y-8">
				<div className="flex flex-col space-y-2">
					<h1 className="text-3xl font-semibold">{post.metadata.title.toLowerCase()}</h1>
					<span className="text-sm text-gray-500">{formatDate(post.metadata.publish_date, true)}</span>
				</div>
				<article className="max-w-none lowercase prose prose-zinc prose-a:no-underline prose-code:normal-case dark:prose-invert">
					<CustomMDX source={post.content} />
				</article>
			</div>
		</section>
	);
}
