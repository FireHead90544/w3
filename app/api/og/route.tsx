import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
	const font = fetch(
		new URL("@/public/fonts/Montserrat-Medium.ttf", import.meta.url)
	).then((res) => res.arrayBuffer());
	const fontData = await font;
	const { searchParams } = req.nextUrl;
	let title = searchParams.get("title");
	let theme = searchParams.get("theme");

	title = title ? title : "Hello 🐱";
	theme = theme === "dark" ? theme : "light";

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundImage: `url(http://localhost:3000/meta/og-${theme}.png)`,
					backgroundSize: "cover",
				}}
			>
				<div
					style={{
						display: "flex",
						fontFamily: "Montserrat",
						fontSize: 55,
						letterSpacing: "-0.03em",
						fontStyle: "normal",
						color: theme === "dark" ? "#f2f4f5" : "#171722",
						lineHeight: "90px",
						whiteSpace: "pre-wrap",
						padding: "0 120px",
						textAlign: title.length >= 64 ? "center" : "start"
					}}
				>
					{title}
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: "Montserrat",
					data: fontData,
					style: "normal",
				},
			],
		}
	);
}
