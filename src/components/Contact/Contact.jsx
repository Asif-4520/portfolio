import React from "react";
import { Section } from "../ui/Section";
import { SiGithub, SiDiscord, SiX } from "react-icons/si";
import { Mail, ArrowUpRight } from "lucide-react";
import { CopyButton } from "./CopyButton";
import { ContactForm } from "./ContactForm";
import "./Contact.css";
import { pageContent, siteConfig } from "@/data";

const contactLinks = [
	...siteConfig.contact.map((contact) => ({
		...contact,
		href: contact.url || `mailto:${contact.value}`,
		icon: { email: Mail, discord: SiDiscord, x: SiX }[contact.type],
	})),
	{
		label: siteConfig.social.github.label.toUpperCase(),
		value: siteConfig.social.github.url.replace("https://", ""),
		href: siteConfig.social.github.url,
		icon: SiGithub,
	},
];

export const Contact = () => {
	return (
		<Section
			sectionName="contact"
			subtitle={pageContent.sections.contact.label}
			className="relative w-full min-h-fit lg:min-h-screen bg-bg py-12 md:py-16 lg:py-20 px-3 sm:px-7 flex flex-col justify-center overflow-hidden"
		>
			<div className="relative z-10 w-full max-w-6xl mx-auto space-y-12">
				{/* Section Header */}
				<div data-animate="slide-down" className="flex flex-col space-y-3">
					<h2 className="text-white text-4xl sm:text-6xl uppercase tracking-tight font-heading">
						{pageContent.sections.contact.title}{" "}
						<span className="text-accent">
							{pageContent.sections.contact.titleAccent}
						</span>
					</h2>
					<p className="text-white/60 text-sm sm:text-base leading-relaxed">
						{pageContent.sections.contact.description}
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch select-none">
					{/* LEFT COLUMN (5 cols): Primary Contact Links */}
					<div
						data-animate="slide-right"
						className="lg:col-span-5 contact-tactical-card flex flex-col justify-between space-y-6 p-6 sm:p-8 border border-white/15 bg-[#0a0c10]/85 backdrop-blur-xl"
					>
						<div className="space-y-6">
							<div className="flex items-center justify-between border-b border-white/10 pb-4">
								<span className="text-xs text-white/60 uppercase tracking-wider font-mono">
									CONTACT DETAILS
								</span>
								<span className="text-[10px] text-accent font-mono px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
									AVAILABLE
								</span>
							</div>

							<div className="space-y-3.5">
								{contactLinks.map((item) => {
									const Icon = item.icon;

									return (
										<div
											key={item.label}
											className="contact-endpoint-item group relative p-3.5 bg-black/60 border border-white/10 hover:border-accent/50 hover:bg-white/[0.06] transition-all duration-300 flex items-center justify-between"
										>
											<div className="flex items-center gap-3.5 overflow-hidden">
												<div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
													<Icon size={17} aria-hidden="true" />
												</div>
												<div className="flex flex-col min-w-0">
													<span className="text-[9.5px] text-white/40 uppercase tracking-wider font-mono">
														{item.label}
													</span>
													<span className="text-xs sm:text-sm text-white truncate font-medium">
														{item.value}
													</span>
												</div>
											</div>

											<div className="flex items-center gap-1.5 shrink-0 ml-2">
												<CopyButton value={item.value} label={item.label} />
												<a
													href={item.href}
													target="_blank"
													rel="noopener noreferrer"
													className="p-1.5 rounded-lg bg-accent/10 hover:bg-accent hover:text-black text-accent transition-colors cursor-pointer"
													title="Open link"
												>
													<ArrowUpRight size={13} aria-hidden="true" />
												</a>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					{/* RIGHT COLUMN (7 cols): Clean Contact Form */}
					<ContactForm />
				</div>
			</div>
		</Section>
	);
};

export default Contact;
