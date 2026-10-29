import React from "react";

export const TechBadge = ({ tag, variant = "default", index = 0 }) => {
	if (variant === "glow") {
		return (
			<span className="relative overflow-hidden px-3 py-1 border border-accent/40 text-accent text-[10px] sm:text-xs uppercase tracking-wider bg-accent/10 shadow-[0_0_10px_rgba(0,255,65,0.15)] cursor-default whitespace-nowrap [clip-path:polygon(6px_0%,calc(100%-6px)_0%,100%_6px,100%_calc(100%-6px),calc(100%-6px)_100%,6px_100%,0%_calc(100%-6px),0%_6px)] transition-all duration-300 hover:scale-105 hover:bg-accent/20">
				<span className="relative z-10">{tag}</span>
			</span>
		);
	}

	return (
		<span className="px-3 py-1 border border-white/10 bg-black/70 text-white/70 text-[10px] sm:text-xs uppercase tracking-wider whitespace-nowrap [clip-path:polygon(5px_0%,calc(100%-5px)_0%,100%_5px,100%_calc(100%-5px),calc(100%-5px)_100%,5px_100%,0%_calc(100%-5px),0%_5px)] transition-all duration-300 hover:border-accent/40 hover:text-accent hover:bg-accent/5">
			{tag}
		</span>
	);
};

export default TechBadge;
