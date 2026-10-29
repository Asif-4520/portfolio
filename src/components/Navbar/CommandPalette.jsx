"use client";

import React, { useState, useEffect } from "react";
import { Search, X, Code2, Briefcase, Cpu, History, Send, ExternalLink } from "lucide-react";

export function CommandPalette({ isOpen, onClose, onNavigate }) {
	const [query, setQuery] = useState("");

	useEffect(() => {
		const handleKeyDown = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				if (isOpen) onClose();
				else setQuery("");
			}
			if (e.key === "Escape" && isOpen) {
				onClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const items = [
		{ id: "home", title: "Home / Hero Section", category: "Navigation", icon: Code2, action: () => onNavigate('[data-section="home"]', "home") },
		{ id: "projects", title: "Projects Showcase", category: "Navigation", icon: Briefcase, action: () => onNavigate('[data-section="projects"]', "projects") },
		{ id: "spdsql", title: "spdSQL — WASM SQLite Playground", category: "Projects", icon: Code2, action: () => onNavigate('[data-section="projects"]', "projects") },
		{ id: "zorix", title: "zorix — Promise-based IndexedDB", category: "Projects", icon: Code2, action: () => onNavigate('[data-section="projects"]', "projects") },
		{ id: "skills", title: "Skills & Tech Stack", category: "Navigation", icon: Cpu, action: () => onNavigate('[data-section="skills"]', "skills") },
		{ id: "journey", title: "Career & Progression Timeline", category: "Navigation", icon: History, action: () => onNavigate('[data-section="journey"]', "journey") },
		{ id: "contact", title: "Contact & Peering Request", category: "Navigation", icon: Send, action: () => onNavigate('[data-section="contact"]', "contact") },
		{ id: "github", title: "GitHub Profile (Asif-4520)", category: "External", icon: ExternalLink, action: () => window.open("https://github.com/Asif-4520", "_blank") },
	];

	const filtered = items.filter(
		(item) =>
			item.title.toLowerCase().includes(query.toLowerCase()) ||
			item.category.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<div className="fixed inset-0 z-55 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-fade-in">
			<div className="w-full max-w-xl bg-[#0a0a0a] border border-accent/40 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(0,255,65,0.15)] flex flex-col">
				
				{/* Search Bar Input */}
				<div className="p-4 border-b border-white/10 flex items-center gap-3 bg-white/[0.02]">
					<Search size={18} className="text-accent shrink-0" />
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Type a command or search... (e.g. spdSQL, Skills)"
						className="w-full bg-transparent text-white text-xs sm:text-sm focus:outline-none placeholder:text-white/40"
						autoFocus
					/>
					<button
						type="button"
						onClick={onClose}
						className="px-2.5 py-1 rounded-lg border border-white/10 text-white/50 hover:text-white text-[10px] uppercase cursor-pointer"
					>
						ESC
					</button>
				</div>

				{/* Results List */}
				<div className="max-h-80 overflow-y-auto p-2 space-y-1">
					{filtered.length === 0 ? (
						<div className="p-8 text-center text-xs text-white/40">
							No matching commands found for "{query}"
						</div>
					) : (
						filtered.map((item) => {
							const Icon = item.icon;
							return (
								<button
									key={item.id}
									type="button"
									onClick={() => {
										item.action();
										onClose();
									}}
									className="w-full flex items-center justify-between p-3 rounded-2xl border border-transparent hover:border-accent/30 hover:bg-accent/10 text-left transition-all cursor-pointer group"
								>
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:border-accent/40 group-hover:text-accent transition-colors">
											<Icon size={14} />
										</div>
										<div className="flex flex-col">
											<span className="text-xs text-white group-hover:text-accent transition-colors">
												{item.title}
											</span>
											<span className="text-[9px] text-white/40 uppercase">
												{item.category}
											</span>
										</div>
									</div>
									<span className="text-[10px] text-accent opacity-0 group-hover:opacity-100 transition-opacity">
										SELECT ↵
									</span>
								</button>
							);
						})
					)}
				</div>

				{/* Footer Telemetry */}
				<div className="px-4 py-2.5 border-t border-white/10 bg-white/[0.01] flex items-center justify-between text-[9px] text-white/40">
					<span>PRESS <span className="text-accent">CTRL+K</span> TO TOGGLE</span>
					<span>ASIF NETWORK CORECTRL</span>
				</div>

			</div>
		</div>
	);
}

export default CommandPalette;
