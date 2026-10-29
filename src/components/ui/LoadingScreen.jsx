"use client";

import React, { useEffect, useState } from "react";

export const LoadingScreen = () => {
	const [isOpening, setIsOpening] = useState(false);
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const openTimer = setTimeout(() => {
			setIsOpening(true);
		}, 20);

		const hideTimer = setTimeout(() => {
			setIsHidden(true);
		}, 200);

		return () => {
			clearTimeout(openTimer);
			clearTimeout(hideTimer);
		};
	}, []);

	useEffect(() => {
		if (!isHidden) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isHidden]);

	if (isHidden) return null;

	return (
		<div className="fixed inset-0 z-[9999] pointer-events-none h-screen w-screen overflow-hidden select-none">
			{/* Top Panel - Instant Snap Open Upward */}
			<div
				className="absolute inset-x-0 top-0 h-1/2 bg-[#070707] border-b border-accent/40 transition-transform duration-180 ease-[cubic-bezier(0.8,0,0.1,1)] will-change-transform"
				style={{
					transform: isOpening ? "translate3d(0, -100%, 0)" : "translate3d(0, 0, 0)",
				}}
			>
				<div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,65,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
			</div>

			{/* Bottom Panel - Instant Snap Open Downward */}
			<div
				className="absolute inset-x-0 bottom-0 h-1/2 bg-[#070707] border-t border-accent/40 transition-transform duration-180 ease-[cubic-bezier(0.8,0,0.1,1)] will-change-transform"
				style={{
					transform: isOpening ? "translate3d(0, 100%, 0)" : "translate3d(0, 0, 0)",
				}}
			>
				<div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,65,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
			</div>

			{/* Center Minimal Name Tag */}
			<div
				className={`absolute inset-0 flex items-center justify-center transition-all duration-120 ease-out z-10 ${
					isOpening ? "opacity-0 scale-125 pointer-events-none" : "opacity-100 scale-100"
				}`}
			>
				<div className="flex items-center gap-2.5 px-5 py-2.5 bg-[#0a0c10]/95 border border-accent/60 text-xs text-accent shadow-[0_0_20px_rgba(0,255,65,0.3)] rounded-lg">
					<div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping shadow-[0_0_10px_#00ff41]" />
					<span className="tracking-widest uppercase text-white text-base font-heading font-bold">
						ASIF <span className="text-accent">HOSSAIN</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default LoadingScreen;
