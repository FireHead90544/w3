import Link from "next/link";
import { Button } from "@/components/ui/button";
import InternalLink from "@/components/(misc)/InternalLink";
import LinksContainer from "@/components/(landing)/LinksContainer";
import AboutContainer from "@/components/(landing)/AboutContainer";
import ProfileContainer from "@/components/(landing)/ProfileContainer";
import FunFact from "@/components/(misc)/FunFact";

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
					hi, i'm rudransh. a software engineer majoring in ai&ml.
          my field of research and interest lies in machine learning (more specifically, deep learning).
          neural networks, llms & calculus fascinates me a lot. i love contributing to open source projects.
				</span>
				<span>
					i like reading stuffs & people, listening to music.
          and builds cool stuff. <FunFact />
				</span>
			</AboutContainer>

			<LinksContainer>
				<InternalLink href="https://rudra.is-a.dev/portfolio" text="work" />
				<InternalLink href="https://rudra.is-a.dev/blog" text="blog" />
      </LinksContainer>
		</div>
	);
}
