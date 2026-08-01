"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SignGuestbookDialog from "./SignGuestbookDialog";
import { RxArrowTopRight as ArrowTopRight } from "react-icons/rx";

const SignGuestbookTrigger = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const handleSubmit = async (formData: FormData) => {
		const socials = Object.fromEntries(
			["github", "twitter", "linkedin", "mail", "link"]
				.filter((k) => formData.get(`social_${k}`))
				.map((k) => [k, formData.get(`social_${k}`)])
		);

		const res = await fetch("/api/guestbook", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: formData.get("name"),
				message: formData.get("message"),
				from: formData.get("from") || undefined,
				emoji: formData.get("emoji"),
				socials: Object.keys(socials).length ? socials : undefined,
			}),
		});

		if (!res.ok) {
			const { error } = await res.json() as { error?: string };
			throw new Error(error ?? "failed to sign");
		}

		router.refresh();
	};

	return (
		<>
			<button onClick={() => setOpen(true)} className="inline-flex items-center text-foreground hover:text-muted-foreground duration-200 cursor-pointer">
				<span className="border-b-2">sign</span>
				<ArrowTopRight className="relative -top-1 scale-75" />
			</button>
			<SignGuestbookDialog open={open} onOpenChange={setOpen} onSubmit={handleSubmit} />
		</>
	);
};

export default SignGuestbookTrigger;
