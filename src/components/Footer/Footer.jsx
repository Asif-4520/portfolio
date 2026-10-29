import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { siteConfig, siteNavigation } from "@/data";

export function Footer() {
	return (
		<footer className="relative overflow-hidden bg-[#050505] text-white">
			<div
				className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(0,255,65,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.035)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_76%)]"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute -top-48 left-1/2 size-[34rem] -translate-x-1/2 rounded-full border border-accent/15 shadow-[0_0_0_4rem_rgba(0,255,65,0.025),0_0_0_9rem_rgba(0,255,65,0.018),0_0_100px_rgba(0,255,65,0.09)]"
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-7">
				<section
					className="relative flex min-h-[350px] flex-col justify-between border-b border-white/15 py-5 sm:min-h-[420px] sm:py-6 lg:min-h-[390px] lg:py-6"
					aria-labelledby="footer-title"
				>
					<div className="flex items-center gap-3 font-ibm text-[10px] uppercase tracking-[0.18em] text-white/40">
						<span className="text-accent">{"END // 2026"}</span>
						<span className="h-px w-16 bg-white/20" />
						<span>Thanks for scrolling</span>
					</div>

					<div className="my-8 sm:my-10 lg:my-9">
						<h2
							id="footer-title"
							className="max-w-[1100px] font-heading text-[clamp(2.65rem,8.5vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.075em] text-white [text-shadow:0_0_50px_rgba(0,255,65,0.08)]"
						>
							KEEP MAKING
							<span className="ml-3 block text-transparent [-webkit-text-stroke:1px_rgba(0,255,65,0.8)] transition-colors duration-200 hover:text-accent/10 hover:[text-shadow:0_0_28px_rgba(0,255,65,0.28)] sm:ml-[9vw]">
								GOOD THINGS.
							</span>
						</h2>
						<p className="mt-5 font-ibm text-[10px] uppercase tracking-[0.15em] text-white/40 sm:mt-6">
							— Stay curious. Ship often. Make it useful.
						</p>
					</div>

					<div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end sm:gap-8">
						<p className="max-w-[250px] text-[13px] leading-[1.65] text-white/50">
							Thanks for spending time here. The next chapter is always under
							construction.
						</p>
						<a
							className="group inline-flex items-center gap-4 border border-accent px-4 py-3 font-ibm text-[11px] font-semibold uppercase tracking-[0.16em] text-accent transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:bg-accent hover:text-[#050505] motion-reduce:transform-none"
							href="#home"
							aria-label="Return to the top of the page"
						>
							<span className="text-[9px] text-black/45">↑</span>
							<span>Back to top</span>
							<ArrowUpRight
								size={20}
								className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								aria-hidden="true"
							/>
						</a>
					</div>
				</section>

				<section className="grid gap-6 border-b border-white/10 py-6 sm:grid-cols-[1.5fr_1fr_1fr] sm:gap-8 sm:py-7">
					<div>
						<a
							href={siteConfig.url}
							rel="home"
							className="group inline-flex items-center gap-3 rounded-sm outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-accent"
							aria-label={`Visit ${siteConfig.name} main website`}
							title={`${siteConfig.name} — ${siteConfig.role}`}
						>
							<Image
								src={siteConfig.avatar}
								alt={`${siteConfig.name} logo`}
								width={42}
								height={42}
								className="size-[42px] rounded-full border border-accent object-cover transition-transform duration-300 group-hover:rotate-12 motion-reduce:transform-none"
							/>
							<span className="font-heading text-lg font-bold tracking-tight text-white">
								{siteConfig.shortName}
								<span className="text-accent">.</span>
							</span>
						</a>
						<p className="mt-3 font-ibm text-[10px] uppercase tracking-[0.12em] text-white/40">
							{siteConfig.role}
						</p>
					</div>

					<nav
						className="flex flex-wrap items-start gap-x-5 gap-y-3 sm:flex-col sm:gap-3"
						aria-label="Footer navigation"
					>
						{siteNavigation.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="inline-flex items-center gap-1.5 text-xs text-white/55 transition-colors duration-200 hover:translate-x-1 hover:text-accent motion-reduce:transform-none"
							>
								{link.label}
								<ArrowDownRight size={13} aria-hidden="true" />
							</a>
						))}
					</nav>

					<div className="flex flex-wrap items-start gap-x-5 gap-y-3 sm:flex-col sm:gap-3">
						<a
							href={`mailto:${siteConfig.email}`}
							className="inline-flex items-center gap-1.5 text-xs text-white/55 transition-colors duration-200 hover:translate-x-1 hover:text-accent motion-reduce:transform-none"
						>
							<Mail size={14} aria-hidden="true" /> Email
						</a>
						<a
							href={siteConfig.social.github.url}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 text-xs text-white/55 transition-colors duration-200 hover:translate-x-1 hover:text-accent motion-reduce:transform-none"
						>
							<SiGithub size={14} aria-hidden="true" /> GitHub
						</a>
					</div>
				</section>

				<div className="flex flex-col items-start justify-between gap-4 py-4 font-ibm text-[10px] tracking-[0.05em] text-white/30 sm:flex-row sm:items-center">
					<p className="flex flex-wrap gap-x-5 gap-y-2">
						<span>© {new Date().getFullYear()}</span>
						<span>Built for the internet · Built with Next.js</span>
					</p>
					<div className="flex flex-wrap items-center gap-4">
						<a
							href={siteConfig.url}
							rel="author"
							className="inline-flex items-center gap-1 text-white/40 transition-colors duration-200 hover:text-accent"
							aria-label={`Website built by ${siteConfig.name}`}
						>
							Built by {siteConfig.name}
						</a>
						<a
							href="#home"
							className="inline-flex items-center gap-1 text-accent transition-colors duration-200 hover:-translate-y-0.5 hover:text-white motion-reduce:transform-none"
							aria-label="Back to top"
						>
							Back to top <ArrowUpRight size={14} aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
