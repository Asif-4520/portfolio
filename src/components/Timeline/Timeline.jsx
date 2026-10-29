import { ArrowUpRight, Calendar, CheckCircle2, Layers, Terminal } from "lucide-react";
import React from "react";
import { timelineData } from "@/data";
import { Section } from "../ui/Section";
import { TechBadge } from "../ui/TechBadge";
import "./Timeline.css";

export const Timeline = () => {
	return (
		<Section
			className="relative w-full h-auto bg-bg py-12 px-3 sm:px-7 flex justify-center items-center flex-col gap-10 overflow-hidden"
			sectionName="journey"
			subtitle="JOURNEY"
		>
			{timelineData.map((item, idx) => {
				const topOffset = 110 + idx * 28;
				const zIndex = (idx + 1) * 10;

				return (
					<div
						key={item.id}
						style={{ top: `${topOffset}px`, zIndex }}
						className="timeline-polygon-card max-w-6xl border border-white/10 bg-[#0a0c10]/85 p-6 sm:p-8 md:p-10 overflow-hidden group hover:border-accent/60 transition-all duration-300 shadow-[0_-10px_40px_rgba(0,0,0,0.9)] space-y-6"
					>
						{/* Background Watermark Year */}
						<div className="absolute -bottom-6 -right-2 text-[7rem] sm:text-[10rem] text-accent/5 group-hover:text-accent/12 leading-none pointer-events-none select-none transition-colors duration-500 tracking-tighter">
							{item.year}
						</div>

						{/* Header Bar */}
						<div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
							<div className="flex items-center gap-4">
								{/* 15° Slanted Year Badge */}
								<span className="timeline-year-badge px-4 py-2 bg-accent text-black text-xs tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,255,65,0.35)]">
									<Calendar size={13} aria-hidden="true" />
									{item.year}
								</span>
								<div>
									<h3 className="text-white text-lg sm:text-2xl tracking-tight">
										{item.role}
									</h3>
									<span className="text-accent text-xs uppercase tracking-wider">
										{item.company}
									</span>
								</div>
							</div>

							{/* 6-Point Micro-Chamfer Phase Badge */}
							<div className="timeline-phase-badge flex items-center gap-2 text-xs text-accent bg-accent/10 px-3.5 py-1.5 border border-accent/30">
								<Layers size={14} className="text-accent" aria-hidden="true" />
								<span>PHASE 0{item.id}</span>
							</div>
						</div>

						{/* Overview Summary */}
						<p className="relative z-10 text-white/80 text-xs sm:text-sm leading-relaxed">
							{item.desc}
						</p>

						{/* Key Deliverables Bullet Checklist */}
						<div className="relative z-10 space-y-2.5 text-xs sm:text-sm text-white/70 pt-1">
							{item.milestones.map((ms) => (
								<div key={ms} className="flex items-start gap-2.5">
									<CheckCircle2
										size={15}
										className="text-accent shrink-0 mt-0.5"
										aria-hidden="true"
									/>
									<span className="leading-snug">{ms}</span>
								</div>
							))}
						</div>

						{/* Engineering Rationale Box */}
						<div className="timeline-phase-badge relative z-10 p-4 bg-white/[0.03] border border-white/10 text-xs text-white/80 space-y-1 mt-2">
							<div className="flex items-center gap-1.5 text-accent uppercase text-[10px] tracking-wider">
								<Terminal size={13} aria-hidden="true" />
								<span>ENGINEERING RATIONALE</span>
							</div>
							<p className="text-white/70 text-xs leading-relaxed">
								{item.rationale}
							</p>
						</div>

						{/* Footer Tech Stack Capsules */}
						<div className="flex flex-wrap gap-2">
							{item.tags.map((tag) => (
								<TechBadge key={tag} tag={tag} />
							))}
						</div>
					</div>
				);
			})}
		</Section>
	);
};

export default Timeline;
