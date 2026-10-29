import { Activity, Cpu, Download, MapPin, Send, ShieldCheck, Wrench, Zap } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { pageContent, siteConfig } from "@/data";
import "../Hero/Hero.css";
import "./About.css";

export const About = () => {
	return (
		<Section
			sectionName="about"
			subtitle={pageContent.sections.about.label}
			className="relative w-full min-h-fit bg-bg py-10 sm:py-14 md:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden"
		>
			<div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col space-y-6 sm:space-y-8 select-none">
				{/* 1. TOP MAIN MASTER PANEL */}
				<div
					data-animate="slide-up"
					className="group relative w-full border border-white/10 bg-[#0a0c10]/85 backdrop-blur-xl p-5 sm:p-7 md:p-9 lg:p-10 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] space-y-6 sm:space-y-7 hover:border-accent/50 [clip-path:polygon(12px_0%,calc(100%-12px)_0%,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0%_calc(100%-12px),0%_12px)]"
				>
					{/* Header Category & Location Tag */}
					<div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
						<div className="flex items-center gap-2 text-xs font-mono">
							<span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00ff41]" />
							<span className="text-accent tracking-wider uppercase font-mono text-xs">
								{pageContent.sections.about.kicker}
							</span>
						</div>

						{/* Location Tag */}
						<span className="self-start sm:self-center flex items-center gap-1.5 px-3 py-1 bg-accent/15 border border-accent/40 text-accent text-[10.5px] font-mono font-bold shadow-[0_0_10px_rgba(0,255,65,0.2)] [clip-path:polygon(4px_0%,calc(100%-4px)_0%,100%_4px,100%_calc(100%-4px),calc(100%-4px)_100%,4px_100%,0%_calc(100%-4px),0%_4px)]">
							<MapPin size={13} className="text-accent shrink-0" />
							<span className="uppercase tracking-widest font-semibold">
								{siteConfig.location}
							</span>
						</span>
					</div>

					{/* Logo Avatar, Name Headline & Availability Badge */}
					<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-1">
						<div className="flex items-center gap-4 sm:gap-5">
							<div className="relative group/logo shrink-0">
								<div className="absolute -inset-0.5 bg-linear-to-r from-accent via-accent/50 to-emerald-500 opacity-80 blur-sm group-hover/logo:opacity-100 transition duration-300 [clip-path:polygon(6px_0%,calc(100%-6px)_0%,100%_6px,100%_calc(100%-6px),calc(100%-6px)_100%,6px_100%,0%_calc(100%-6px),0%_6px)]" />
								<Image
									width={64}
									height={64}
									src={siteConfig.avatar}
									alt={`${siteConfig.name} profile avatar`}
									className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-accent bg-black object-cover shadow-[0_0_20px_rgba(0,255,65,0.4)] [clip-path:polygon(6px_0%,calc(100%-6px)_0%,100%_6px,100%_calc(100%-6px),calc(100%-6px)_100%,6px_100%,0%_calc(100%-6px),0%_6px)]"
								/>
							</div>

							<div className="space-y-0.5 sm:space-y-1">
								<h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight uppercase flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
									<span>
										HELLO, I'M{" "}
										<span className="text-accent">{siteConfig.shortName}</span>
									</span>
								</h2>
								<p className="text-accent text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider">
									{pageContent.sections.about.availability}
								</p>
							</div>
						</div>
					</div>

					{/* Detailed Bio Narrative (With Integrated Statement) */}
					<div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-white/85 font-sans">
						<p>
							I am <strong className="text-white">{siteConfig.name}</strong>, a
							{pageContent.sections.about.bio[0]}{" "}
							<strong className="text-accent font-semibold">
								I focus on engineering solutions that are fast, scalable, and
								maintainable.
							</strong>
						</p>
						<p>{pageContent.sections.about.bio[1]}</p>
						<p>{pageContent.sections.about.bio[2]}</p>
					</div>

					{/* INTEGRATED CORE CAPABILITIES */}
					<div className="space-y-4 pt-4 border-t border-white/10">
						<div className="flex items-center justify-between font-mono">
							<h3 className="text-accent font-bold uppercase tracking-wider text-xs">
								// CORE CAPABILITIES
							</h3>
							<span className="text-white/40 uppercase tracking-widest text-[10px]">
								04 MODULES
							</span>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm font-sans">
							<div className="space-y-1.5 p-3 sm:p-3.5 rounded bg-white/2 border border-white/10 hover:border-accent/40 transition-colors">
								<div className="flex items-center gap-2">
									<Zap size={15} className="text-accent shrink-0" />
									<strong className="text-white font-heading uppercase tracking-wide font-bold text-xs sm:text-sm">
										{pageContent.sections.about.capabilities[0].title}
									</strong>
								</div>
								<p className="text-white/75 text-xs leading-relaxed pl-6">
									{pageContent.sections.about.capabilities[0].description}
								</p>
							</div>

							<div className="space-y-1.5 p-3 sm:p-3.5 rounded bg-white/2 border border-white/10 hover:border-accent/40 transition-colors">
								<div className="flex items-center gap-2">
									<Cpu size={15} className="text-accent shrink-0" />
									<strong className="text-white font-heading uppercase tracking-wide font-bold text-xs sm:text-sm">
										{pageContent.sections.about.capabilities[1].title}
									</strong>
								</div>
								<p className="text-white/75 text-xs leading-relaxed pl-6">
									{pageContent.sections.about.capabilities[1].description}
								</p>
							</div>

							<div className="space-y-1.5 p-3 sm:p-3.5 rounded bg-white/2 border border-white/10 hover:border-accent/40 transition-colors">
								<div className="flex items-center gap-2">
									<ShieldCheck size={15} className="text-accent shrink-0" />
									<strong className="text-white font-heading uppercase tracking-wide font-bold text-xs sm:text-sm">
										{pageContent.sections.about.capabilities[2].title}
									</strong>
								</div>
								<p className="text-white/75 text-xs leading-relaxed pl-6">
									{pageContent.sections.about.capabilities[2].description}
								</p>
							</div>

							<div className="space-y-1.5 p-3 sm:p-3.5 rounded bg-white/2 border border-white/10 hover:border-accent/40 transition-colors">
								<div className="flex items-center gap-2">
									<Wrench size={15} className="text-accent shrink-0" />
									<strong className="text-white font-heading uppercase tracking-wide font-bold text-xs sm:text-sm">
										{pageContent.sections.about.capabilities[3].title}
									</strong>
								</div>
								<p className="text-white/75 text-xs leading-relaxed pl-6">
									{pageContent.sections.about.capabilities[3].description}
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* 2. SECOND MASTER PANEL: EXPLORING RYN, STATS & COLLABORATION CTA */}
				<div
					data-animate="slide-up"
					className="group relative w-full border border-white/10 bg-[#0a0c10]/85 backdrop-blur-xl flex flex-col justify-between p-5 sm:p-7 md:p-9 lg:p-10 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] space-y-6 hover:border-accent/50 [clip-path:polygon(10px_0%,calc(100%-10px)_0%,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0%_calc(100%-10px),0%_10px)]"
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center border-b border-white/10 pb-6">
						{/* Left Column: Currently Exploring RYN */}
						<div className="space-y-3 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2 text-accent font-mono text-xs">
									<Activity size={14} className="animate-pulse" />
									<span>// CURRENTLY EXPLORING</span>
								</div>
								<span className="text-[9px] font-mono text-accent bg-accent/15 px-2.5 py-0.5 border border-accent/30 font-bold uppercase [clip-path:polygon(3px_0%,100%_0%,calc(100%-3px)_100%,0%_100%)]">
									ACTIVE DEV
								</span>
							</div>

							<div>
								<h4 className="text-accent text-2xl sm:text-3xl font-bold font-heading uppercase tracking-tight">
									LERNIEX
								</h4>
								<p className="text-white/85 text-xs sm:text-sm font-sans block mt-0.5">
									A programming-learning platform where students learn, practice,
									debug, and build through real code
								</p>
							</div>

							<div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] pt-1">
								<span className="px-2.5 py-1 bg-black/60 border border-white/15 text-white/90 font-medium">
									React
								</span>
								<span className="text-white/40">•</span>
								<span className="px-2.5 py-1 bg-black/60 border border-white/15 text-white/90 font-medium">
									Node.js
								</span>
								<span className="text-white/40">•</span>
								<span className="px-2.5 py-1 bg-accent/15 border border-accent/40 text-accent font-bold">
									Web
								</span>
							</div>
						</div>

						{/* Right Column: Quick Stats Grid */}
						<div className="space-y-3">
							<div className="flex items-center justify-between">
								<h3 className="text-accent font-mono font-bold uppercase text-xs">
									// VERIFIED METRICS
								</h3>
								<span className="text-white/40 font-mono text-[10px]">
									SYS::STATS
								</span>
							</div>

							<div className="grid grid-cols-3 gap-2.5 sm:gap-3 text-center">
								<div className="p-3 bg-white/3 border border-white/10 hover:border-accent/40 transition-colors [clip-path:polygon(6px_0%,calc(100%-6px)_0%,100%_6px,100%_calc(100%-6px),calc(100%-6px)_100%,6px_100%,0%_calc(100%-6px),0%_6px)]">
									<span className="text-lg sm:text-2xl font-bold font-mono text-accent block">
										10+
									</span>
									<span className="text-[8.5px] sm:text-[9px] font-mono text-white/70 uppercase block mt-0.5">
										Projects Built
									</span>
								</div>

								<div className="p-3 bg-white/3 border border-white/10 hover:border-accent/40 transition-colors [clip-path:polygon(6px_0%,calc(100%-6px)_0%,100%_6px,100%_calc(100%-6px),calc(100%-6px)_100%,6px_100%,0%_calc(100%-6px),0%_6px)]">
									<span className="text-lg sm:text-2xl font-bold font-mono text-accent block">
										05+
									</span>
									<span className="text-[8.5px] sm:text-[9px] font-mono text-white/70 uppercase block mt-0.5">
										Open Source
									</span>
								</div>

								<div className="p-3 bg-white/3 border border-white/10 hover:border-accent/40 transition-colors [clip-path:polygon(6px_0%,calc(100%-6px)_0%,100%_6px,100%_calc(100%-6px),calc(100%-6px)_100%,6px_100%,0%_calc(100%-6px),0%_6px)]">
									<span className="text-lg sm:text-2xl font-bold font-mono text-accent block">
										15+
									</span>
									<span className="text-[8.5px] sm:text-[9px] font-mono text-white/70 uppercase block mt-0.5">
										Tech Stack
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Final CTA Bar */}
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pt-2">
						<div className="space-y-1">
							<span className="text-[10px] font-mono text-accent uppercase font-bold tracking-widest block">
								// READY TO COLLABORATE?
							</span>
							<h3 className="text-white text-xl sm:text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight">
								<span className="font-semibold">LET'S CONNECT .</span>
							</h3>
						</div>

						<div className="flex flex-wrap items-center gap-3 shrink-0">
							<Button
								href="#contact"
								variant="primary"
								shape="chamfer"
								size="md"
								icon={Send}
								iconPosition="left"
								className="grow"
							>
								LET'S BUILD
							</Button>

							<Button
								href="/resume/Asif_Hossain_Resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								variant="outline"
								shape="chamfer"
								size="md"
								icon={Download}
								className="grow"
								iconPosition="left"
							>
								RESUME
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default About;
