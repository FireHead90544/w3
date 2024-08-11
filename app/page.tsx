import InternalLink from "@/components/(misc)/InternalLink";
import LinksContainer from "@/components/(landing)/LinksContainer";
import AboutContainer from "@/components/(landing)/AboutContainer";
import ProfileContainer from "@/components/(landing)/ProfileContainer";
import FunFact from "@/components/(misc)/FunFact";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LightningBoltIcon } from "@radix-ui/react-icons";

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
					my field of research and interest lies in machine learning (more specifically, deep learning).
					neural networks, llms & calculus fascinates me a lot. i love contributing to open source projects.
				</span>
				<Alert>
					<LightningBoltIcon className="h-4 w-4" />
					<AlertTitle>fun fact?</AlertTitle>
					<AlertDescription>
						<FunFact />
					</AlertDescription>
				</Alert>
			</AboutContainer>

			<LinksContainer>
        		<InternalLink href={"https://rudra.is-a.dev/static/resume.pdf"} text="resume" />
				<InternalLink href={"https://rudra.is-a.dev/portfolio"} text="work" />
				<InternalLink href={"https://rudra.is-a.dev/blog"} text="blog" />
      		</LinksContainer>
		</div>
	);
}
