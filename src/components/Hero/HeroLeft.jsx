import React from "react";
import { Button } from "../ui/Button";
import { Terminal, Mail, Download } from "lucide-react";
import { siteConfig } from "@/data";

export const HeroLeft = () => {
	return (
		<div
			data-animate="slide-right"
			className="flex flex-col items-start select-none space-y-5 sm:space-y-6 w-full"
		>
			{/* Developer Status */}
			<div className="flex items-center gap-3 max-w-full ">
				<div
					className="
						flex items-center gap-2
						px-3 py-1.5 sm:px-4 sm:py-2
						bg-accent/10 border border-accent/30
						text-accent text-[9px] sm:text-xs
						font-mono font-bold uppercase tracking-widest
						shadow-[0_0_15px_rgba(0,255,65,0.15)]
						[clip-path:polygon(0%_0%,calc(100%-8px)_0%,100%_8px,100%_100%,8px_100%,0%_calc(100%-8px))]
					"
				>
					<Terminal
						size={12}
						className="shrink-0 animate-pulse text-accent"
						aria-hidden="true"
					/>

					<span className="truncate">{siteConfig.role}</span>
				</div>
			</div>

			{/* Name */}
			<div className="relative  cursor-default w-full py-1">
				<h1
					className="
						text-[clamp(3.5rem,17vw,6rem)]
						sm:text-7xl
						lg:text-8xl
						font-heading font-black
						tracking-tight
						uppercase
						leading-[0.82]
						select-none
						flex flex-wrap gap-x-4
					"
				>
					<span className="block text-white">{siteConfig.shortName}</span>

					<span
						className="block"
						style={{
							WebkitTextStroke: "clamp(1.5px, 0.35vw, 2.5px) #00ff41",
							color: "transparent",
							textShadow: "0 0 20px rgba(0, 255, 65, 0.3)",
						}}
					>
						{siteConfig.lastName}
					</span>
				</h1>
			</div>

			{/* Developer Description */}
			<div className="pl-3 sm:pl-4 border-l-2 border-accent/50 space-y-1.5 sm:space-y-2 py-1 max-w-xl">
				<p className="text-white text-sm sm:text-lg tracking-wide font-semibold flex items-center gap-2">
					{siteConfig.tagline}
				</p>

				<p className="text-white/70 text-xs sm:text-base leading-relaxed font-sans">
					I build high-performance tools and platforms, including zero-dependency database
					wrappers like zorixDB and WASM-powered engines like spdSQL. Specializing in
					React, Next.js, and Node.js.
				</p>
			</div>

			{/* Actions */}
			<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
				<Button
					href="#contact"
					variant="primary"
					shape="chamfer"
					size="lg"
					icon={Mail}
					iconPosition="left"
					className="w-full sm:w-auto"
				>
					CONTACT ME
				</Button>

				<Button
					href={siteConfig.resume}
					target="_blank"
					rel="noopener noreferrer"
					variant="outline"
					shape="chamfer"
					size="lg"
					icon={Download}
					iconPosition="left"
					className="w-full sm:w-auto"
				>
					RESUME
				</Button>
			</div>
		</div>
	);
};

export default HeroLeft;
