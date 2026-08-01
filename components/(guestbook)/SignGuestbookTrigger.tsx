"use client";

import React, { useState } from "react";
import SignGuestbookDialog from "./SignGuestbookDialog";
import { RxArrowTopRight as ArrowTopRight } from "react-icons/rx";

const SignGuestbookTrigger = () => {
	const [open, setOpen] = useState(false);

	const handleSubmit = async (formData: FormData) => {
		await new Promise((r) => setTimeout(r, 800));
		console.log("guestbook entry:", Object.fromEntries(formData));
	};

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="inline-flex items-center text-foreground hover:text-muted-foreground duration-200 cursor-pointer"
			>
				<span className="border-b-2">sign</span>
				<ArrowTopRight className="relative -top-1 scale-75" />
			</button>
			<SignGuestbookDialog open={open} onOpenChange={setOpen} onSubmit={handleSubmit} />
		</>
	);
};

export default SignGuestbookTrigger;
