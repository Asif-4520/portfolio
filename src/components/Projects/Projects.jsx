import React from "react";
import Image from "next/image";
import { Section } from "../ui/Section";
import { projects } from "@/data";
import { TechBadge } from "../ui/TechBadge";
import { Button } from "../ui/Button";
import { ExternalLink, Code2, Eye } from "lucide-react";
import "./Projects.css";
import { pageContent } from "@/data";

export const Projects = () => {
	return (
		<Section
			sectionName="projects"
			subtitle={pageContent.sections.projects.label}
			className="relative w-full min-h-fit lg:min-h-screen bg-bg py-12 md:py-16 lg:py-20 px-3 sm:px-7 flex flex-col justify-center overflow-hidden"
		>
			<div className="relative z-10 w-full max-w-6xl mx-auto h-full flex flex-col space-y-8 select-none">
				{/* Section Sub-Tagline */}
				<div data-animate="slide-up" className="text-center max-w-2xl mx-auto">
					<p className="text-white/60 text-xs sm:text-sm leading-relaxed">
						{pageContent.sections.projects.intro}
					</p>
				</div>

				{/* Symmetrical Two-Column Split Grid */}
				<div className="project-grid-container grid grid-cols-1 lg:grid-cols-2 gap-8 w-full z-10 relative">
					{projects.map((project) => (
						<article
							key={project.id}
							data-animate="slide-up"
							className="project-card project-polygon-card group relative w-full border border-white/10 bg-[#0a0c10]/85 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] space-y-6"
							style={{ "--project-color": project.color || "#00ff41" }}
						>
							{/* Header Category & Project Title */}
							<div className="space-y-4">
								<div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
									<div className="flex items-center gap-2">
										<span className="text-accent tracking-wider uppercase font-mono">
											// {project.category || "SYSTEM DOSSIER"}
										</span>
									</div>
									<span className="text-white/40 uppercase tracking-widest text-[10px] font-mono">
										SYS::{project.id}
									</span>
								</div>

								{/* Main Title & Language Badge */}
								<div className="flex flex-col gap-1.5">
									<div className="flex items-center justify-between gap-4">
										<h3 className="text-white text-2xl sm:text-3xl tracking-tight group-hover:text-accent transition-colors uppercase font-heading">
											{project.name || project.title}
										</h3>
										<span className="text-[10px] text-black font-bold font-mono px-2.5 py-1 bg-accent shadow-[0_0_10px_rgba(0,255,65,0.4)] [clip-path:polygon(4px_0%,calc(100%-4px)_0%,100%_4px,100%_calc(100%-4px),calc(100%-4px)_100%,4px_100%,0%_calc(100%-4px),0%_4px)]">
											{project.lang || "TS"}
										</span>
									</div>
									<a
										href="https://github.com/Asif-4520"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="GitHub Profile @ASIF4520"
										className="text-[10px] font-mono text-white/40 hover:text-accent transition-colors w-max"
									>
										Built by @ASIF4520
									</a>
								</div>

								{/* Project Screenshot Banner Preview */}
								{project.imageUrl && (
									<div className="project-img-frame aspect-[16/9] w-full border border-white/15 group-hover:border-accent/60 transition-colors relative">
										{/* HUD Target Corner Brackets */}
										<div className="hud-corner-tl" />
										<div className="hud-corner-tr" />
										<div className="hud-corner-bl" />
										<div className="hud-corner-br" />

										{/* Screenshot Image */}
										<Image
											src={project.imageUrl}
											alt={`${project.name} - Project Screenshot`}
											fill
											sizes="(max-width: 768px) 100vw, 50vw"
											className="object-cover group-hover:scale-105 transition-all duration-500"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-60 pointer-events-none" />

										{/* Live View Badge */}
										<div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/85 backdrop-blur-md border border-white/20 text-[9px] font-mono text-white/80 group-hover:border-accent/50 group-hover:text-accent transition-colors [clip-path:polygon(4px_0%,100%_0%,calc(100%-4px)_100%,0%_100%)] z-10">
											<Eye size={11} />
											<span>PREVIEW</span>
										</div>
									</div>
								)}

								{/* Detailed Summary Paragraph */}
								<p className="text-white/70 text-xs sm:text-sm leading-relaxed">
									{project.summary || project.description}
								</p>

								{/* Technical Specs Key-Value Grid */}
								{project.specs && project.specs.length > 0 && (
									<div className="grid grid-cols-2 gap-2 pt-2">
										{project.specs.map((spec, idx) => (
											<div
												key={idx}
												className="p-2.5 bg-white/[0.03] border border-white/10 text-[10px] flex flex-col gap-0.5 [clip-path:polygon(6px_0%,calc(100%-6px)_0%,100%_6px,100%_calc(100%-6px),calc(100%-6px)_100%,6px_100%,0%_calc(100%-6px),0%_4px)]"
											>
												<span className="text-white/40 uppercase tracking-widest text-[9px] font-mono">
													{spec.key}
												</span>
												<span className="text-accent text-xs truncate font-mono">
													{spec.value}
												</span>
											</div>
										))}
									</div>
								)}
							</div>

							{/* Bottom Metadata & Action Buttons */}
							<div className="w-full flex flex-col gap-4 pt-4 border-t border-white/10">
								{/* Tech Stack Badges */}
								<div className="flex flex-wrap gap-1.5 w-full">
									{(project.tech || []).map((t, idx) => (
										<TechBadge key={idx} tag={t} />
									))}
								</div>

								{/* Symmetrical 2-Column Action Button Deck */}
								<div className="flex flex-wrap gap-2 justify-between w-full mt-1">
									{project.codeUrl && (
										<Button
											href={project.codeUrl}
											target="_blank"
											variant="outline"
											shape="chamfer"
											size="md"
											icon={Code2}
											iconPosition="left"
											className="grow"
										>
											SOURCE
										</Button>
									)}

									{project.liveUrl && (
										<Button
											href={project.liveUrl}
											target="_blank"
											variant="primary"
											shape="chamfer"
											size="md"
											icon={ExternalLink}
											iconPosition="left"
											className="grow"
										>
											Explore
										</Button>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Projects;
