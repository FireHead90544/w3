export default function NotFound() {
	return (
		<div className="flex flex-col sm:flex-row items-center justify-center text-center mx-auto">
            <h1 className="border-b sm:border-b-0 sm:border-r sm:pr-6 sm:mr-5 inline-block text-2xl font-medium leading-10 border-muted">
                404
            </h1>
            <div className="inline-block">
                <h2 className="text-base font-normal leading-10">
                    This page could not be found.
                </h2>
            </div>
		</div>
	);
}
