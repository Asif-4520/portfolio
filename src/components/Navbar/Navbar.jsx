"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppStore } from "@/store/AppContext";
import { navItems } from "./constants";
import { siteConfig } from "@/data";
import "./Navbar.css";

export function Navbar() {
	const { currentSection, setCurrentSection } = useAppStore();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setMobileMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Setup IntersectionObserver for active section highlighting on scroll
	useEffect(() => {
		const sections = document.querySelectorAll("section[data-section]");
		if (!sections || sections.length === 0) return;

		const observerOptions = {
			root: null,
			rootMargin: "-25% 0px -45% 0px",
			threshold: 0.15,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const sectionName = entry.target.getAttribute("data-section");
					if (sectionName) {
						setCurrentSection(sectionName);
					}
				}
			});
		}, observerOptions);

		sections.forEach((sec) => {
			observer.observe(sec);
		});

		return () => {
			sections.forEach((sec) => observer.unobserve(sec));
			observer.disconnect();
		};
	}, [setCurrentSection]);

	const handleNavClick = (selector, name) => {
		setCurrentSection(name);
		setMobileMenuOpen(false);

		const target = document.querySelector(selector) || document.getElementById(name);
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<header className="fixed top-3 sm:top-4 z-50 px-3 sm:px-6 lg:px-8 w-full flex justify-center items-center">
			<nav className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-6 cyber-nav-dock">
				<div className="w-full flex items-center justify-between md:w-auto md:shrink-0">
					<button
						type="button"
						className="group flex shrink-0 items-center gap-3 text-sm uppercase tracking-wider text-white sm:text-base cursor-pointer"
						onClick={() => handleNavClick('[data-section="home"]', "home")}
					>
						<Image
							width={32}
							height={32}
							src={siteConfig.avatar}
							alt={`${siteConfig.name} logo`}
							className="size-8 shrink-0 rounded-lg border-2 border-accent/60 shadow-[0_0_12px_rgba(0,255,65,0.4)] object-cover transition-transform duration-300 group-hover:scale-105"
						/>

						<span className="tracking-tight transition-colors duration-200 group-hover:text-accent font-heading font-bold whitespace-nowrap shrink-0">
							{siteConfig.name}
						</span>
					</button>

					{/* Mobile Hamburger Toggle Button */}
					<button
						type="button"
						onClick={() => setMobileMenuOpen((open) => !open)}
						className="flex size-10 items-center justify-center border border-accent/40 bg-[#0a0c10]/95 text-accent transition-all duration-200 hover:bg-accent/20 hover:border-accent md:hidden cursor-pointer shadow-[0_0_10px_rgba(0,255,65,0.2)] [clip-path:polygon(6px_0%,calc(100%-6px)_0%,100%_6px,100%_calc(100%-6px),calc(100%-6px)_100%,6px_100%,0%_calc(100%-6px),0%_6px)]"
						aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
						aria-expanded={mobileMenuOpen}
					>
						{mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>

				{/* Navigation Links - Mobile Dropdown & Desktop Inline Dock */}
				<div
					className={`mobile-nav-menu ${
						mobileMenuOpen ? "mobile-nav-menu-open" : ""
					} md:flex md:flex-row md:items-center md:gap-1.5 lg:gap-2 md:mt-0 md:pt-0 md:border-t-0 md:w-auto md:shrink-0`}
				>
					{navItems.map((item, idx) => (
						<a
							key={item.name}
							href={item.selector}
							onClick={(e) => {
								e.preventDefault();
								handleNavClick(item.selector, item.name);
							}}
							className={`cyber-nav-link group flex items-center justify-between w-full transition-all duration-200 cursor-pointer md:w-auto ${
								currentSection === item.name ? "active" : ""
							}`}
						>
							<span className="flex items-center gap-2.5">
								<span className="md:hidden text-[9.5px] font-mono text-accent group-[.active]:text-black font-bold">
									0{idx + 1}
								</span>
								<span>{item.label}</span>
							</span>

							<span className="md:hidden text-accent text-xs font-mono font-bold">
								&gt;
							</span>
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
