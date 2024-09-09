import InternalLink from "@/components/(misc)/InternalLink";
import LinksContainer from "@/components/(landing)/LinksContainer";
import AboutContainer from "@/components/(landing)/AboutContainer";
import ProfileContainer from "@/components/(landing)/ProfileContainer";
import FunFactBox from "@/components/(misc)/FunFactBox";
import infoMeta from "@/content/misc/meta.json";

export default function Home() {
  return (
	<section className="flex flex-col space-y-6 my-4 w-full">
		<ProfileContainer
			name={infoMeta.name.toLowerCase()}
			role={infoMeta.profile.role.toLowerCase()}
			work={infoMeta.profile.work.toLowerCase()}
			org={infoMeta.profile.org.toLowerCase()}
		/>

		<AboutContainer>
			<span>
				{infoMeta.profile.about.toLowerCase()}
			</span>
			<FunFactBox />
		</AboutContainer>

		<LinksContainer>
			<InternalLink href={"/resume.pdf"} text="resume" fakeExternal />
			<InternalLink href={"/work"} text="work" fakeExternal />
			<InternalLink href={"/blog"} text="blog" fakeExternal />
		</LinksContainer>
	</section>
  );
}
