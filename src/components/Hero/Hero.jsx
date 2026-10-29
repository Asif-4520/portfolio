import { Section } from "../ui/Section";
import "./Hero.css";
import HeroLeft from "./HeroLeft";
import dynamic from "next/dynamic";
const HeroRight = dynamic(() => import("./HeroRight"));
export const Hero = () => {
	return (
		<Section
			sectionName="home"
			className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-bg py-20 px-3 sm:px-7"
		>
			<div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mt-10">
				<HeroLeft />
				<HeroRight />
			</div>
		</Section>
	);
};

export default Hero;
