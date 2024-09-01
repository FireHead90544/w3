import InternalLink from "@/components/(misc)/InternalLink";
import LinksContainer from "@/components/(landing)/LinksContainer";
import AboutContainer from "@/components/(landing)/AboutContainer";
import ProfileContainer from "@/components/(landing)/ProfileContainer";
import FunFactBox from "@/components/(misc)/FunFactBox";

export default function Home() {
  return (
	<div className="flex flex-col space-y-6 my-4 w-full">
		<ProfileContainer
			name="rudransh joshi"
			role="foss developer"
			work="building llm apps"
			org="undisclosed"
		/>

		<AboutContainer>
			<span>
				hi, {"i'm"} rudransh. a software engineer majoring in {"ai&ml"}.
				my field of research and interest lie in machine learning (more specifically, deep learning).
				neural networks, llms and calculus fascinate me a lot. i frequently contribute to open source development.
				feel free to check out my work, blog or maybe just sign the guestbook, eh?
			</span>
			<FunFactBox />
		</AboutContainer>

		<LinksContainer>
			<InternalLink href={"https://rudra.is-a.dev/static/resume.pdf"} text="resume" fakeExternal={true} />
			<InternalLink href={"/work"} text="work" fakeExternal={true} />
			<InternalLink href={"/blog"} text="blog" fakeExternal={true} />
		</LinksContainer>
	</div>
  );
}
