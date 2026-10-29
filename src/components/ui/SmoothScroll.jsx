"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import { useAppStore } from "@/store/AppContext";

export function SmoothScroll() {
	const { deviceTier } = useAppStore();

	useEffect(() => {
		// Low tier gets native browser scrolling for maximum performance
		if (!deviceTier || deviceTier === "low" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		// We only register ScrollTrigger if we are medium or high tier
		gsap.registerPlugin(ScrollTrigger);

		const isHigh = deviceTier === "high";

		// Initialize Lenis with tier-specific settings
		const lenis = new Lenis({
			lerp: isHigh ? 0.08 : 0.1, // Premium lerp for medium tier
			duration: isHigh ? 1.2 : 1.0, // Longer duration for buttery-smooth feel
			smoothWheel: true,
			syncTouch: true, // Smooth touch scrolling on mobile devices
			touchMultiplier: 1.2,
		});

		window.lenis = lenis;

		// Sync Lenis with GSAP ScrollTrigger
		lenis.on("scroll", ScrollTrigger.update);

		const tick = (time) => {
			lenis.raf(time * 1000);
		};
		gsap.ticker.add(tick);

		gsap.ticker.lagSmoothing(0);

		return () => {
			window.lenis = null;
			lenis.destroy();
			gsap.ticker.remove(tick);
		};
	}, [deviceTier]);

	return null;
}
