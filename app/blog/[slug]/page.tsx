export default function Post({ params }: { params: { slug: string } }) {
	return (
		<div className="flex flex-col space-y-6 my-4 w-full">
			<div className="flex flex-col">
				<h1 className="text-3xl font-light">{params.slug}</h1>
				<span>post content here</span>
			</div>
		</div>
	);
}
