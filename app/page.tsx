import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center w-full">
      <span className="text-3xl font-thin">Work in Progress</span>
      <Link href="https://rudra.is-a.dev/">
        <Button variant={'outline'}>cd ~/rudra.is-a.dev</Button>
      </Link>
    </div>
  );
}
