"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "@/store/AppContext";

export const MouseFollower = () => {
	const { deviceTier } = useAppStore();
	const [isHovering, setIsHovering] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isTouchDevice, setIsTouchDevice] = useState(false);

	useEffect(() => {
		const isTouch = window.matchMedia("(pointer: coarse)").matches;
		setIsTouchDevice(isTouch);
		if (deviceTier !== "high" || isTouch) return;

		// Update coordinates on passive mousemove
		const onMouseMove = (e) => {
			if (!isVisible) setIsVisible(true);
			document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
			document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
		};

		// Global hover event delegation for peak performance
		const handleMouseOver = (e) => {
			const target = e.target;
			if (!target) return;
			const isInteractive = target.closest("a, button, [role='button'], .group\\/btn, .group\\/nav-item, .skill-badge, .project-card-wrapper, .timeline-card-wrapper");
			if (isInteractive) {
				setIsHovering(true);
			}
		};

		const handleMouseOut = (e) => {
			const target = e.target;
			if (!target) return;
			const isInteractive = target.closest("a, button, [role='button'], .group\\/btn, .group\\/nav-item, .skill-badge, .project-card-wrapper, .timeline-card-wrapper");
			if (isInteractive) {
				setIsHovering(false);
			}
		};

		window.addEventListener("mousemove", onMouseMove, { passive: true });
		window.addEventListener("mouseover", handleMouseOver, { passive: true });
		window.addEventListener("mouseout", handleMouseOut, { passive: true });

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseover", handleMouseOver);
			window.removeEventListener("mouseout", handleMouseOut);
		};
	}, [deviceTier, isVisible]);

	if (deviceTier !== "high" || isTouchDevice) return null;

	return (
		<div
			className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border ${
				isVisible ? "opacity-100" : "opacity-0"
			} ${
				isHovering 
					? "w-12 h-12 border-accent bg-accent/5 shadow-[0_0_12px_rgba(0,255,65,0.25)]" 
					: "w-5 h-5 border-accent/40"
			}`}
			style={{
				transform: "translate3d(var(--mouse-x, -100px), var(--mouse-y, -100px), 0) translate(-50%, -50%)",
				willChange: "transform",
				transition: "transform 0.16s cubic-bezier(0.1, 0.8, 0.25, 1), width 0.3s cubic-bezier(0.22, 1, 0.36, 1), height 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
			}}
		/>
	);
};

export default MouseFollower;
