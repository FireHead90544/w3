import React from "react"
import InternalLink from "@/components/(misc)/InternalLink"

const CustomLink = (props: Readonly<{ href: string; children: React.ReactNode }>) => {
	let href: string = props.href;

	if (href.startsWith("/")) {
		return (
            <InternalLink text={props.children} href={props.href} />
		);
	}

	if (href.startsWith("#")) {
		return (
            <InternalLink text={props.children} href={props.href} aria-label={props.href} />
        );
	}

	return (
		<InternalLink
            text={props.children}
            href={props.href}
			target="_blank"
			aria-label={props.href}
			rel="noopener noreferrer"
		/>
	);
}

export default CustomLink
