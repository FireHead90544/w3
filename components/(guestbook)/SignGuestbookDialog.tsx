"use client";

import React, { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon as GitHubIcon, LinkedInLogoIcon as LinkedInIcon } from "@radix-ui/react-icons";
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";
import { LuMail as MailIcon, LuLink as LinkIcon, LuLoaderCircle as Spinner } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface SignGuestbookDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onSubmit?: (data: FormData) => Promise<void>;
}

type SocialType = "github" | "twitter" | "linkedin" | "mail" | "link";

const SOCIAL_CONFIGS: { type: SocialType; icon: React.ReactNode; placeholder: string; inputType?: string }[] = [
	{ type: "github",   icon: <GitHubIcon   className="w-3.5 h-3.5" />, placeholder: "username" },
	{ type: "twitter",  icon: <TwitterIcon  className="w-3.5 h-3.5" />, placeholder: "handle" },
	{ type: "linkedin", icon: <LinkedInIcon className="w-3.5 h-3.5" />, placeholder: "profile url" },
	{ type: "mail",     icon: <MailIcon     className="w-3.5 h-3.5" />, placeholder: "email address", inputType: "email" },
	{ type: "link",     icon: <LinkIcon     className="w-3.5 h-3.5" />, placeholder: "https://yoursite.com" },
];

const EMOJI_OPTIONS = [
	"💖", "🚀", "🔥", "✨", "🫂", "💀",
	"🌸", "🛐", "⚡", "🍀", "🤖", "🎨",
	"🙏", "🌙", "🐱", "🦋",
];

const MAX_SOCIALS = 3;

const SignGuestbookDialog = ({ open, onOpenChange, onSubmit }: SignGuestbookDialogProps) => {
	const [activeSocials, setActiveSocials] = useState<SocialType[]>([]);
	const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const toggleSocial = (type: SocialType) => {
		setActiveSocials((prev) => {
			if (prev.includes(type)) return prev.filter((s) => s !== type);
			if (prev.length >= MAX_SOCIALS) return prev;
			return [...prev, type];
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		const formData = new FormData(e.currentTarget);
		if (selectedEmoji) formData.set("emoji", selectedEmoji);
		try {
			if (onSubmit) await onSubmit(formData);
			setSubmitted(true);
			setTimeout(() => {
				onOpenChange(false);
				setSubmitted(false);
				setActiveSocials([]);
				setSelectedEmoji(null);
				formRef.current?.reset();
			}, 1200);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleOpenChange = (v: boolean) => {
		if (!v) {
			setActiveSocials([]);
			setSelectedEmoji(null);
			setSubmitted(false);
		}
		onOpenChange(v);
	};

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent
				className={cn(
					"w-[calc(100%-2rem)] sm:w-full sm:max-w-lg",
					"gap-0 p-0 overflow-hidden",
					"border border-border bg-popover text-popover-foreground shadow-lg rounded-lg"
				)}
			>
				<DialogHeader className="px-5 pt-5 pb-3 border-b border-border">
					<DialogTitle className="text-base font-medium">sign the guestbook</DialogTitle>
					<DialogDescription className="text-xs text-muted-foreground mt-0.5">
						drop a cool note, say hi, or just sign meow :3
					</DialogDescription>
				</DialogHeader>

				{submitted ? (
					<div className="flex flex-col items-center justify-center py-10 px-5 gap-2">
						<span className="text-2xl">✨</span>
						<p className="text-sm text-muted-foreground">thanks for signing!</p>
					</div>
				) : (
					<form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
						<div className="bg-popover border-b border-border px-4 py-3 flex flex-col gap-2">
							<span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
								pick an emoji <span className="text-foreground">*</span>
							</span>
							<div className="flex flex-wrap gap-1.5">
								{EMOJI_OPTIONS.map((emoji) => (
									<button
										key={emoji}
										type="button"
										onClick={() => setSelectedEmoji((prev) => (prev === emoji ? null : emoji))}
										className={cn(
											"w-8 h-8 flex items-center justify-center rounded-md text-base transition-all duration-150 border",
											selectedEmoji === emoji
												? "bg-foreground/10 border-foreground/30 ring-1 ring-foreground/20"
												: "border-transparent hover:border-border hover:bg-muted"
										)}
										aria-label={`select emoji ${emoji}`}
										aria-pressed={selectedEmoji === emoji}
									>
										{emoji}
									</button>
								))}
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
							<div className="bg-popover px-4 py-3 flex flex-col gap-1.5">
								<label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
									name <span className="text-foreground">*</span>
								</label>
								<Input
									name="name"
									required
									placeholder="your name"
									className="border-0 bg-transparent px-0 py-0 h-auto text-sm shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/50"
								/>
							</div>

							<div className="bg-popover px-4 py-3 flex flex-col gap-1.5 row-span-2">
								<label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
									message <span className="text-foreground">*</span>
								</label>
								<Textarea
									name="message"
									required
									placeholder="write something..."
									className="border-0 bg-transparent px-0 py-0 h-20 min-h-[4rem] text-sm shadow-none focus-visible:ring-0 resize-none placeholder:text-muted-foreground/50"
								/>
							</div>

							<div className="bg-popover px-4 py-3 flex flex-col gap-1.5">
								<label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
									from <span className="normal-case tracking-normal font-normal">(optional)</span>
								</label>
								<Input
									name="from"
									placeholder="city, country, the internet?"
									className="border-0 bg-transparent px-0 py-0 h-auto text-sm shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/50"
								/>
							</div>
						</div>

						<div className="bg-popover border-t border-border px-4 py-3 flex flex-col gap-2">
							<span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
								socials <span className="normal-case tracking-normal font-normal">(optional)</span>
							</span>
							<div className="flex items-center gap-2 flex-wrap">
								{SOCIAL_CONFIGS.map(({ type, icon }) => {
									const active = activeSocials.includes(type);
									const disabled = !active && activeSocials.length >= MAX_SOCIALS;
									return (
										<button
											key={type}
											type="button"
											onClick={() => toggleSocial(type)}
											disabled={disabled}
											className={cn(
												"flex items-center justify-center w-7 h-7 rounded-md border transition-all duration-150",
												active
													? "bg-foreground text-background border-foreground"
													: "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/40",
												disabled && "opacity-30 cursor-not-allowed"
											)}
											aria-label={`toggle ${type}`}
											aria-pressed={active}
										>
											{icon}
										</button>
									);
								})}
								{activeSocials.length > 0 && (
									<div className="flex-1 flex flex-wrap gap-2 min-w-0">
										{activeSocials.map((type) => {
											const config = SOCIAL_CONFIGS.find((s) => s.type === type)!;
											return (
												<Input
													key={type}
													name={`social_${type}`}
													type={config.inputType ?? "text"}
													placeholder={config.placeholder}
													className="border-0 border-b border-border rounded-none bg-transparent px-0 py-0 h-auto text-xs shadow-none focus-visible:ring-0 min-w-[6rem] flex-1 placeholder:text-muted-foreground/50"
												/>
											);
										})}
									</div>
								)}
							</div>
						</div>

						<div className="flex justify-end px-4 py-3 border-t border-border bg-muted/30">
							<Button
								type="submit"
								disabled={isSubmitting || !selectedEmoji}
								size="sm"
								variant="outline"
								className="text-xs h-7 px-3 rounded-md"
							>
								{isSubmitting ? (
									<>
										<Spinner className="w-3 h-3 mr-1.5 animate-spin" />
										signing...
									</>
								) : (
									"sign the guestbook"
								)}
							</Button>
						</div>
					</form>
				)}
			</DialogContent>
		</Dialog>
	);
};

export default SignGuestbookDialog;
