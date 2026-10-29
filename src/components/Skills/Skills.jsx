import React from "react";
import { Section } from "../ui/Section";
import { pageContent, skills } from "@/data";
import "./Skills.css";

// Helper function to convert Hex color to RGBA for dynamic neon glows
const hexToRgba = (hex, alpha = 0.25) => {
	if (!hex) return `rgba(0, 255, 65, ${alpha})`;
	let c = hex.replace("#", "");
	if (c.length === 3) {
		c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
	}
	const r = parseInt(c.substring(0, 2), 16) || 0;
	const g = parseInt(c.substring(2, 4), 16) || 0;
	const b = parseInt(c.substring(4, 6), 16) || 0;
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const Skills = () => {
	// Split skills for Desktop 4 - 5 - 4 Honeycomb
	const topRow = skills.slice(0, 4); // 4 Hexagons
	const centerRow = skills.slice(4, 9); // 5 Hexagons
	const bottomRow = skills.slice(9, 14); // 4 Hexagons

	const renderHexCard = (skill) => {
		const Icon = skill.Icon;
		const brandColor = skill.color || "#00ff41";

		return (
			<div
				key={skill.name}
				className="cyber-hex-wrapper group relative"
				style={{
					"--brand-color": brandColor,
					"--brand-glow-20": hexToRgba(brandColor, 0.35),
				}}
			>
				<div className="cyber-hex-outer">
					<div className="cyber-hex-inner">
						<div className="hex-ambient-glow" />

						<div
							className="hex-icon-box transition-transform duration-300 group-hover:scale-110"
							style={{ color: brandColor }}
						>
							<Icon className="w-6 h-6 lg:w-8 lg:h-8" />
						</div>

						<div className="text-center z-10 space-y-0.5 px-1.5">
							<h3 className="text-white text-xs lg:text-sm font-bold font-heading tracking-tight truncate group-hover:text-accent transition-colors">
								{skill.name}
							</h3>
							<span className="text-[8.5px] lg:text-[9.5px] text-white/45 font-mono block uppercase tracking-widest truncate">
								{skill.category}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<Section
			sectionName="skills"
			subtitle={pageContent.sections.skills.label}
			className="relative w-full min-h-fit lg:min-h-screen bg-bg py-12 md:py-16 lg:py-20 px-3 sm:px-7 flex flex-col justify-center overflow-hidden"
		>
			<div className="relative z-10 w-full max-w-6xl mx-auto space-y-8 select-none">
				{/* Section Sub-Tagline */}
				<div data-animate="slide-up" className="text-center max-w-2xl mx-auto">
					<p className="text-white/60 text-xs sm:text-sm leading-relaxed">
						{pageContent.sections.skills.intro}
					</p>
				</div>

				<div data-animate="slide-up" className="relative w-full z-10">
					{/* MOBILE & TABLET (< 1024px): Previous Simple Creative Sci-Fi Armor Chamfer Cards */}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:hidden gap-3.5 sm:gap-4 w-full">
						{skills.map((skill) => {
							const Icon = skill.Icon;
							const brandColor = skill.color || "#00ff41";

							return (
								<div
									key={skill.name}
									className="armor-skill-card group"
									style={{
										"--brand-color": brandColor,
										"--brand-glow-20": hexToRgba(brandColor, 0.25),
									}}
								>
									<div className="armor-skill-inner">
										<div className="armor-ambient-glow" />

										<div
											className="armor-icon-box"
											style={{ color: brandColor }}
										>
											<Icon className="w-5 h-5 sm:w-6 sm:h-6" />
										</div>

										<div className="space-y-0.5 min-w-0 overflow-hidden text-left">
											<h3 className="text-white text-xs sm:text-sm font-bold font-heading tracking-tight truncate group-hover:text-accent transition-colors">
												{skill.name}
											</h3>
											<span className="text-[9.5px] text-white/40 font-mono block uppercase tracking-wider truncate">
												{skill.category}
											</span>
										</div>
									</div>
								</div>
							);
						})}
					</div>

					{/* DESKTOP (>= 1024px): 4 - 5 - 4 Interlocking Cyber Hexagon Honeycomb Matrix */}
					<div className="hidden lg:flex flex-col items-center justify-center w-full py-4 relative z-10 overflow-visible">
						{/* Top Row: 4 Hexagons */}
						<div className="hex-row hex-row-4">{topRow.map(renderHexCard)}</div>

						{/* Center Row: 5 Hexagons (Perfect Interlocking Center) */}
						<div className="hex-row hex-row-5">{centerRow.map(renderHexCard)}</div>

						{/* Bottom Row: 4 Hexagons */}
						<div className="hex-row hex-row-4">{bottomRow.map(renderHexCard)}</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Skills;
