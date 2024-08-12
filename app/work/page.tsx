import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col space-y-4 my-4 w-full items-center justify-center">
			<span className="font-thin text-3xl">Work in Progress</span>
            <Link href={"https://rudra.is-a.dev/"}>
                <Button variant={"outline"}>cd ~/rudra.is-a.dev</Button>
            </Link>
		</div>
	);
}