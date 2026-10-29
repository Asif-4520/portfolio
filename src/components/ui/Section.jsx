import React from "react";

export function Section({
	className = "",
	subtitle,
	sectionName,
	sectionRef,
	children,
}) {
	return (
		<section
			ref={sectionRef}
			id={sectionName}
			data-section={sectionName}
			className={`scroll-mt-24 sm:scroll-mt-28 ${className}`}
		>
			{subtitle && (
				<div className="section-subtitle-container flex flex-col items-center justify-center gap-2 w-full mb-8 md:mb-12 select-none">
					{/* Clean Section Title with Slanted Cyber Laser Underline */}
					<div className="relative flex flex-col items-center">
						<h2 className="text-white text-2xl sm:text-3xl tracking-widest uppercase">
							{subtitle}
						</h2>

						{/* Slanted Laser Underline Beam */}
						<div className="mt-2 w-32 sm:w-44 h-0.5 bg-accent shadow-[0_0_15px_#00ff41] [clip-path:polygon(8px_0%,100%_0%,calc(100%-8px)_100%,0%_100%)]" />
					</div>
				</div>
			)}

			{children}
		</section>
	);
}

export default Section;
